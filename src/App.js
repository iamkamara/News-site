import React, { Component } from 'react';
import axios from 'axios';

class NewsWebsite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY')
      .then(response => {
        this.setState({ articles: response.data.articles });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>Latest News</h1>
        {this.state.articles.map(article =>
          <div key={article.title}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.url}>Read more</a>
          </div>
        )}
      </div>
    );
  }
}

export default NewsWebsite;
