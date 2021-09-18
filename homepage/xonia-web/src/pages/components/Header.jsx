// Copyright 2021 - Present Xonia, Inc.

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//    http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React from 'react'

function Header() {
    return (
        <>
            <header className="site-header">
                <div className="container">
                    <div className="site-header-inner">
                        <div className="brand header-brand">
                            <h1 className="m-0">
                                <a href="https://xoniaapp.com/">
                                    <img className="header-logo-image" src="https://cdn.xoniaapp.com/static/logo.png" alt="xonia logo" width={150} height="157px" />
                                </a>
                            </h1>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
