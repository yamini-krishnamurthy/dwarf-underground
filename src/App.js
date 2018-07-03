import React, { Component } from 'react';

import './App.css';
import Header from './Header'
import NavLinks from './NavLinks'
import Author from './Author'
import Article from './Article'
import Footer from './Footer'
import Advertisement from './Advertisement'
import ArticleLink from './ArticleLink'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NavLinks />
        <main className="expanded row">
          <div className="large-8 medium-12 columns article">
            <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
            <Author />
            <Article />
            <div className="article-links">
              <ArticleLink iClass="fa fa-comments-o" text="Comments" />
              <ArticleLink iClass="fa fa-share" text="Share Post" />
            </div>
          </div>
          <Advertisement />

          <div className="small-12 columns other-articles">
            <h2>From around the Realm</h2>
            <div className="small-6 medium-3 columns other-article">
              <a href="#">
                <img src="https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif" alt="orc" />
                <p>Single Orcs in Indianapolis</p>
              </a>
            </div>
            <div className="small-6 medium-3 columns other-article">
              <a href="#">
                <img src="https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg" alt="mountain" />
                <p>You won't believe what's under this mountain</p>
              </a>
            </div>
            <div className="small-6 medium-3 columns other-article">
              <a href="#">
                <img src="http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg" alt="gold" />
                <p>Mine 20% more gold with One Weird Trick</p>
              </a>
            </div>
            <div className="small-6 medium-3 columns other-article">
              <a href="#">
                <img src="http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg" alt="hobbit" />
                <p>Surprise for Indiana Hobbits born before 1999</p>
              </a>
            </div>
          </div>
        </main>

        <Footer />

      </div>
    );
  }

}

export default App;
