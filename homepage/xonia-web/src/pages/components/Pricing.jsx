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

function Pricing() {
    return (
        <>
            <section className="pricing section">
                <div className="container-sm">
                    <div className="pricing-inner section-inner">
                        <div className="pricing-header text-center">
                            <h2 className="section-title mt-0">
                                Featuring XTRA
                            </h2>
                            <p className="section-paragraph mb-0">
                                Expected Beta on 15Th November, 2021
                            </p>
                        </div>
                        <div className="pricing-tables-wrap">
                            <div className="pricing-table">
                                <div className="pricing-table-inner is-revealing" style={{ visibility: 'visible' }}>
                                    <div className="pricing-table-main">
                                        <div className="
                                                pricing-table-header
                                                pb-24
                                            ">
                                            <div className="pricing-table-price">
                                                <span className="
                                                        pricing-table-price-currency
                                                        h2
                                                    ">$</span><span className="
                                                        pricing-table-price-amount
                                                        h1
                                                    ">4.99</span><span className="text-xs">/month</span>
                                            </div>
                                        </div>
                                        <div className="
                                                pricing-table-features-title
                                                text-xs
                                                pt-24
                                                pb-24
                                            ">
                                            Features
                                        </div>
                                        <ul className="
                                                pricing-table-features
                                                list-reset
                                                text-xs
                                            ">
                                            <li>
                                                <span>1440P Screen
                                                    Share</span>
                                            </li>
                                            <li>
                                                <span>Groving and moving
                                                    emojis</span>
                                            </li>
                                            <li>
                                                <span>Special Badge</span>
                                            </li>
                                            <li>
                                                <span>250MB File Upload</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="pricing-table-cta mb-8">
                                        <a className="
                                                button
                                                button-primary
                                                button-shadow
                                                button-block
                                            " href="https://xoniaapp.com/">Apply for Beta</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pricing
