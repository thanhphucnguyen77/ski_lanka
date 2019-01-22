import React from 'react'
import Navigation from '../components/navigation.js';
import '../styles/style.css'
import '../styles/affiliate.css'

const Affiliate = (props) => {
    return (
        <div>
            <div className="container-other-page">
                <Navigation isActiveAffiliate={true} />
                <section className="page-content" >
                    <div className="page-content-article-affiliate">
                        <div className="page-content-col1">
                            <h1>REWARD FOR THE REFERALS</h1>
                            <div className="divider"></div>
                            <ul >
                                <li>Receive up to 100% commission </li>
                                <li>Commission rate depends on your team size (the number of people linked to referals) Very Simple</li>
                                <li>You will receive some commission as low as just having on team member</li>
                            </ul>
                        </div>
                        <div className="page-content-col2">
                            <table className="affiliate-table">
                                <tr>
                                    <th colSpan="3" style={{border: "1px solid ##93C37D", backgroundColor: "green"}}>Reward for referals</th>
                                </tr>
                                <tr>
                                    <th>Mission No.</th>
                                    <th>Team Size</th>
                                    <th>Reward</th>
                                </tr>

                                <tr>
                                    <td>Mission 1</td>
                                    <td>5</td>
                                    <td>5%</td>
                                </tr>
                                <tr>
                                    <td>Mission 2</td>
                                    <td>10</td>
                                    <td>10%</td>
                                </tr>
                                <tr>
                                    <td>Mission 3</td>
                                    <td>15</td>
                                    <td>15%</td>
                                </tr>
                                {/* <tr>
                                    <td>Mission 4</td>
                                    <td>20</td>
                                    <td>20%</td>
                                </tr>
                                <tr>
                                    <td>Mission 5</td>
                                    <td>25</td>
                                    <td>25%</td>
                                </tr>
                                <tr>
                                    <td>Mission 6</td>
                                    <td>30</td>
                                    <td>30</td>
                                </tr>
                                <tr>
                                    <td>Mission 7</td>
                                    <td>35</td>
                                    <td>35%</td>
                                </tr> */}

                                <tr>
                                    <td>Mission 8</td>
                                    <td>50</td>
                                    <td>50%</td>
                                </tr>
                                <tr>
                                    <td>Mission 9</td>
                                    <td>80</td>
                                    <td>80%</td>
                                </tr>

                                 <tr>
                                    <td>Final mission</td>
                                    <td>100</td>
                                    <td>100%</td>
                                </tr>


                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Affiliate;