import React, {Component} from 'react';
import {connect} from 'react-redux';
import {add_articles, init_articles, search_by, show_comments} from "../../actions";
import {Col, Row, Button, Upload} from "antd";
import './article.css';
import {UploadOutlined} from "@ant-design/icons";

let article_obj =   {
    "userId": 1,
    "id": 1,
    "img": "",
    "title": "New Article",
    "body": "New Context"
};


class Article extends Component {
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(res =>
            {
                this.props.init_articles(res)
                let array_articles = this.props.articles_to_show;
                this.props.add_articles(array_articles)
            }
        );
    }
    render() {
        let arr = this.props.articles_to_show;
        let title;
        let body;
        let search;
        return (
            <div>
                <form onSubmit={(event) =>{
                    article_obj.title = title.value
                    article_obj.body = body.value
                    article_obj.author = this.props.username
                    event.preventDefault()
                    article_obj.timestamp = Math.floor(Date.now()/1000)
                    const heroClone = {
                        ...article_obj
                    };
                    console.log(title.value)
                    arr.push(heroClone)
                    arr.sort()
                    this.props.add_articles(arr)
                }}>
                    <label><b>New Post Title</b></label>
                    <input style={{width: "100%"}} ref={(node) => {title = node }}/>
                    <label><b>New Post</b></label>
                    <input rows={4} style={{width: "100%", height:'100px' }} ref={(node) => {body = node}}/>
                    <Upload>
                        <Button icon={<UploadOutlined />} style={{marginTop: '5px'}}>Upload image</Button>
                    </Upload>
                    <Row>
                        <Col span={2} offset={18}>
                            <Button type="primary" htmlType="reset" danger style={{ width: '100px', float: 'right', marginTop: '5px' }} >Cancel</Button>
                        </Col>
                        <Col span={2} offset={1}>
                            <Button type="primary" htmlType="submit" style={{ width: '100px', float: 'right', marginTop: '5px'}}>Submit</Button>
                        </Col>
                    </Row>
                </form>
                <input style={{width: "100%", marginTop: '20px'}} ref={(node) => {search = node }}/>
                <Row>
                    <Col span={2} offset={18}></Col>
                    <Col span={2} offset={1}>
                        <Button type = "primary"
                                style={{ width: '100px', float:'right',marginTop: '10px' }}
                                onClick={
                                    () => this.props.search_by(search)
                                } >Search</Button>
                    </Col>
                </Row>
                    {
                        this.props.articles.map((word, id) =>
                            <div key = {id} className="articleRow">
                                {
                                <Row>
                                    <Col span={10} className="articleimg">
                                        <img src={word.img}/>
                                    </Col>
                                    <Col span={10} className="articletxt">
                                        <b>{word.title}</b>
                                        <br/>
                                        {word.author}
                                        <br/>
                                        {word.body}
                                    </Col>
                                </Row>
                                }
                                <Row>
                                    <Col span={2} offset={18}>
                                        <Button type='primary' danger style={{ width: '100px' }}>Edit</Button>
                                    </Col>
                                    <Col span={2} offset={1}>
                                        <Button type='primary' style={{ width: '100px' }} onClick={() => this.props.show_comments_vis()}>Comment</Button>
                                    </Col>
                                </Row>
                                <Row>
                                    {
                                        this.props.show_comments && (
                                            <div>
                                                <ol>
                                                    {word.comments.map((comment, j) =>
                                                        <li key={j}>
                                                            {comment}
                                                        </li>)}
                                                </ol>
                                            </div>
                                        )
                                    }
                                </Row>
                            </div> )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state,
        articles: state.articles,
        show_comments: state.show_comments

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        init_articles: (new_json) => dispatch(init_articles(new_json)),
        add_articles: (json) => dispatch(add_articles(json)),
        search_by: (val) => dispatch(search_by(val)),
        show_comments_vis: () => dispatch({type: 'SHOW_COMMENTS'})
    }
};

export default connect(
    mapStateToProps,mapDispatchToProps
)(Article);
