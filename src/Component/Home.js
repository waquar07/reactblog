import React from 'react'
import { Provide } from './Createcontext'
import Latest from './Latest';
import LatestStories from './LatestStories';
import TheLatest from './TheLatest';
import TopPosts from './TopPosts';
import Travelimg from './Traveling';
import Displayimg from './Displayimg';
import Advertisement from './Advertisement';




export const Home = () => {
    return (
        <div>
            <Provide>
                <Displayimg />
                <TheLatest />
                <Latest />
                <Travelimg />
                <Advertisement />

                <TopPosts />

                <LatestStories />


            </Provide>

        </div>
    )
}