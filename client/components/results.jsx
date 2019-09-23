import React from 'react';

const Results = (props) => {

    let resultNodes = props.data.map(function(result, index) {
        return <div key={index}><b>{result.date}</b> |  {result.description}</div>;
      });
  
    return (
        <div id="project-comments" className="commentList">
        <ul>{resultNodes}</ul>
        </div>
    );

}

export default Results;