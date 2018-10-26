import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <footer class="main-footer">
                <div class="pull-right hidden-xs">
                    <b>Version</b> 2.4.0
            </div>
                <strong>Copyright &copy; 2014-2016 <a href="https://adminlte.io">Subramani Studio</a>.</strong> All rights
            reserved.
          </footer>
        );
    }
}

export default Footer;