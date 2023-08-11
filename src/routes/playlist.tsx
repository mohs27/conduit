import { For } from "solid-js";
import {
  createEffect,
  createSignal,
  onMount,
  Show,
  useContext,
} from "solid-js";
import { useLocation } from "solid-start";
import VideoCard from "~/components/VideoCard";
import { DBContext } from "~/root";
import { RelatedStream } from "~/types";

export default function Playlist() {
  const [playlist, setPlaylist] = createSignal(null);
  const [admin, setAdmin] = createSignal(false);
  const [isBookmarked, setIsBookmarked] = createSignal(false);
  const [list, setList] = createSignal<{ videos: RelatedStream[] }>();
  const [db] = useContext(DBContext);
  const route = useLocation();
  const id = route.query.list;
  //     getRssUrl: _this => {
  //         return _this.authApiUrl() + "/rss/playlists/" + _this.$route.query.list;
  //     }
  //     isPipedPlaylist: _this => {
  //         // regex to determine whether it's a Piped plalylist
  //         return /[\da-fA-F]{8}-[\da-fA-F]{4}-[\da-fA-F]{4}-[\da-fA-F]{4}-[\da-fA-F]{12}/.test(
  //             _this.$route.query.list,
  //         );
  //     }
  createEffect(async () => {
    if (!db()) return;

    const tx = db()!.transaction("playlists", "readonly");
    const store = tx.objectStore("playlists");
    const l = await store.get(id);
    console.log(l, id);
    setList(l);
    console.log(l);
  });
  onMount(() => {
    // this.getPlaylistData();
    // const playlistId = this.$route.query.list;
    // if (this.authenticated && playlistId?.length == 36)
    //     this.fetchJson(this.authApiUrl() + "/user/playlists", null, {
    //         headers: {
    //             Authorization: this.getAuthToken(),
    //         },
    //     }).then(json => {
    //         if (json.error) alert(json.error);
    //         else if (json.filter(playlist => playlist.id === playlistId).length > 0) this.admin = true;
    //     });
    // this.isPlaylistBookmarked();
    // window.addEventListener("scroll", this.handleScroll);
    // if (this.playlist) this.updateTitle();
  });
  // deactivated() {
  //     window.removeEventListener("scroll", this.handleScroll);
  // }
  //     async fetchPlaylist() {
  //         return await await this.fetchJson(this.authApiUrl() + "/playlists/" + this.$route.query.list);
  //     }
  //     async getPlaylistData() {
  //         this.fetchPlaylist()
  //             .then(data => (this.playlist = data))
  //             .then(() => this.updateTitle());
  //     }
  //     async updateTitle() {
  //         document.title = this.playlist.name + " - Piped";
  //     }
  //     handleScroll() {
  //         if (this.loading || !this.playlist || !this.playlist.nextpage) return;
  //         if (window.innerHeight + window.scrollY >= document.body.offsetHeight - window.innerHeight) {
  //             this.loading = true;
  //             this.fetchJson(this.authApiUrl() + "/nextpage/playlists/" + this.$route.query.list, {
  //                 nextpage: this.playlist.nextpage,
  //             }).then(json => {
  //                 this.playlist.relatedStreams.concat(json.relatedStreams);
  //                 this.playlist.nextpage = json.nextpage;
  //                 this.loading = false;
  //                 json.relatedStreams.map(stream => this.playlist.relatedStreams.push(stream));
  //             });
  //         }
  //     }
  //     removeVideo(index) {
  //         this.playlist.relatedStreams.splice(index, 1);
  //     }
  //     async clonePlaylist() {
  //         this.fetchJson(this.authApiUrl() + "/import/playlist", null, {
  //             method: "POST",
  //             headers: {
  //                 Authorization: this.getAuthToken(),
  //             },
  //             body: JSON.stringify({
  //                 playlistId: this.$route.query.list,
  //             }),
  //         }).then(resp => {
  //             if (!resp.error) {
  //                 alert(this.$t("actions.clone_playlist_success"));
  //             } else alert(resp.error);
  //         });
  //     }
  //     downloadPlaylistAsTxt() {
  //         var data = "";
  //         this.playlist.relatedStreams.forEach(element => {
  //             data += "https://piped.video" + element.url + "\n";
  //         });
  //         this.download(data, this.playlist.name + ".txt", "text/plain");
  //     }
  //     async bookmarkPlaylist() {
  //         if (!this.playlist) return;

  //         if (this.isBookmarked) {
  //             this.removePlaylistBookmark();
  //             return;
  //         }

  //         if (window.db) {
  //             const playlistId = this.$route.query.list;
  //             var tx = window.db.transaction("playlist_bookmarks", "readwrite");
  //             var store = tx.objectStore("playlist_bookmarks");
  //             store.put({
  //                 playlistId: playlistId,
  //                 name: this.playlist.name,
  //                 uploader: this.playlist.uploader,
  //                 uploaderUrl: this.playlist.uploaderUrl,
  //                 thumbnail: this.playlist.thumbnailUrl,
  //                 uploaderAvatar: this.playlist.uploaderAvatar,
  //                 videos: this.playlist.videos,
  //             });
  //             this.isBookmarked = true;
  //         }
  //     }
  //     async removePlaylistBookmark() {
  //         var tx = window.db.transaction("playlist_bookmarks", "readwrite");
  //         var store = tx.objectStore("playlist_bookmarks");
  //         store.delete(this.$route.query.list);
  //         this.isBookmarked = false;
  //     }
  //     async isPlaylistBookmarked() {
  //         // needed in order to change the is bookmarked var later
  //         const App = this;
  //         const playlistId = this.$route.query.list;
  //         var tx = window.db.transaction("playlist_bookmarks", "readwrite");
  //         var store = tx.objectStore("playlist_bookmarks");
  //         var req = store.openCursor(playlistId);
  //         req.onsuccess = function (e) {
  //             var cursor = e.target.result;
  //             App.isBookmarked = cursor ? true : false;
  //         };
  //     }
  // }

  return (
    <>
      <Show when={list()} keyed>
        {(l) => {
          return (
            <For each={l.videos}>{(video) => <VideoCard v={video} />}</For>
          );
        }}
      </Show>
      {/*  <ErrorHandler v-if="playlist && playlist.error" :message="playlist.message" :error="playlist.error" />

     <div v-if="playlist" v-show="!playlist.error">
         <h1 class="text-center my-4" v-text="playlist.name" />

         <div class="flex justify-between items-center">
             <div>
                 <router-link class="link" :to="playlist.uploaderUrl || '/'">
                     <img :src="playlist.uploaderAvatar" loading="lazy" class="rounded-full" />
                     <strong v-text="playlist.uploader" />
                 </router-link>
             </div>
             <div>
                 <strong v-text="`${playlist.videos} ${$t('video.videos')}`" />
                 <br />
                 <button class="btn mr-1" v-if="!isPipedPlaylist" @click="bookmarkPlaylist">
                     {{ $t(`actions.${isBookmarked ? "playlist_bookmarked" : "bookmark_playlist"}`)
                     }}<font-awesome-icon class="ml-3" icon="bookmark" />
                 </button>
                 <button class="btn mr-1" v-if="authenticated && !isPipedPlaylist" @click="clonePlaylist">
                     {{ $t("actions.clone_playlist") }}<font-awesome-icon class="ml-3" icon="clone" />
                 </button>
                 <button class="btn mr-1" @click="downloadPlaylistAsTxt">
                     {{ $t("actions.download_as_txt") }}
                 </button>
                 <a class="btn mr-1" :href="getRssUrl">
                     <font-awesome-icon icon="rss" />
                 </a>
                 <WatchOnYouTubeButton :link="`https://www.youtube.com/playlist?list=${this.$route.query.list}`" />
             </div>
         </div>

         <hr />

         <div class="video-grid">
             <VideoItem
                 v-for="(video, index) in playlist.relatedStreams"
                 :key="video.url"
                 :item="video"
                 :index="index"
                 :playlist-id="$route.query.list"
                 :admin="admin"
                 @remove="removeVideo(index)"
                 height="94"
                 width="168"
             />
         </div>
     </div> */}
    </>
  );
}