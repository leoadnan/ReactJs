import React, {Component} from 'react';

class Sidebar extends Component {
   render() {
      var sideBar = <div>
         <h1>
            Welcome to EIS
         </h1>
         <hr/>
         <div className="row">
            <div className="col-sm-3">
               <ul className="list-group">
                  <li className="list-group-item text-muted">Profile</li>
                  <li className="list-group-item">
                     <a className="center-block text-center">Image</a>
                  </li>
                  <li className="list-group-item text-right">
                     2.13.2014
                     <span className="pull-left">
                        <strong>Joining Date</strong>
                     </span>
                     {/* <div className="clearfix"></div> */}
                  </li>
               </ul>
            </div>
            <div className="col-sm-9 profile-desc"></div>
         </div>
      </div>
      /*var sideBar = React.DOM.ul({ className: 'list-group' },
                      React.DOM.li({className:'list-group-item text-muted'},'Profile'),
                      React.DOM.li({className:'list-group-item'},
                      React.DOM.a({className:'center-block text-center',href:'#'},'Image')),
                      React.DOM.li({className:'list-group-item text-right'},
                      '2.13.2014',
                      React.DOM.span({className:'pull-left'},
                      React.DOM.strong({className:'pull-left'},'Joining Date')),
                      React.DOM.div({className:'clearfix'}))); */
      return (sideBar);
   }
}

export default Sidebar;