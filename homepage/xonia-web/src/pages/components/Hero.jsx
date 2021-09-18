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

function Hero() {
    return (
        <>
            <section className="hero">
                <div className="container">
                    <div className="hero-inner">
                        <div className="hero-copy">
                            <h1 className="hero-title mt-0">
                                a new way to chat.
                            </h1>
                            <p className="hero-paragraph">
                                Data protection is important. End-to-end encrypted chat for everyone.
                            </p>
                            <div className="hero-cta">
                                <a className="button button-primary" href="https://app.xoniaapp.com/#">Register for Early
                                    Access</a>
                                <a className="button button-primary" href="https://app.xoniaapp.com">Sign Up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
