import _ from 'lodash';
import React, { Component } from 'react';
import SearchBar from './components/search_bar';
import VideList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';

const API_KEY = 'xxx';


class App extends Component {
   constructor(props){
      super(props)
      this.state = {
         videos:[],
         seletedVideo: null
      };
      this.videoSearch('react-redux');
   }

   videoSearch(term){
      YTSearch({key: API_KEY, term:term}, (videos) => {
         this.setState({
            videos: videos,
            seletedVideo: videos[0]
         })
      });
   }

   render() {
      const videoSearch = _.debounce((term)=>{this.videoSearch(term)},300);
      return (
         <div>            
            <SearchBar 
               onSearchTermChange={videoSearch}
            />
            <VideoDetail 
               video={this.state.seletedVideo}
            />
            <VideList 
               videos={this.state.videos}
               onVideoSelect={seletedVideo => this.setState({seletedVideo})}
            />
         </div>
      );
   }
}

export default App;

