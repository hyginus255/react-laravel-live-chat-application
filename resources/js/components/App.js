import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const App = () => {
    return (
        <div className="row">
            <div className="container">
                <div className="row chat-window col-xs-5 col-md-3 p-0" id="chat_window_1" style={{marginLeft:'10px'}}>
                    <div className="col-xs-12 col-md-12 p-0">
                        <div className="panel panel-default">
                            <div className="panel-heading top-bar">
                                <div className="col-md-12 col-xs-12">
                                    <h3 className="panel-title"><span className="glyphicon glyphicon-comment"></span> Chat now</h3>
                                </div>
                            </div>
                            <div className="panel-body msg_container_base">
                                <div className="row msg_container base_sent">
                                    <div className="col-md-10 col-xs-10">
                                        <div className="messages msg_sent">
                                            <p>that mongodb thing looks good, huh? tiny master db, and huge document store</p>
                                            <time dateTime="2009-11-13T20:00">Timothy • 51 min</time>
                                        </div>
                                    </div>
                                </div>
                                <div className="row msg_container base_receive">
                                    <div className="col-md-10 col-xs-10">
                                        <div className="messages msg_sent">
                                            <p>that mongodb thing looks good, huh? tiny master db, and huge document store</p>
                                            <time dateTime="2009-11-13T20:00">Timothy • 51 min</time>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel-footer">
                                    <div className="input-group">
                                        <input id="btn-input" type="text" className="form-control input-sm chat_input" placeholder="Write your message here..." />
                                        <span className="input-group-btn">
                                        <button className="btn btn-primary btn-sm" id="btn-chat">Send Message</button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


ReactDOM.render(<App />, document.getElementById('app'));

