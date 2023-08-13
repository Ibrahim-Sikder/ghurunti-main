import React from 'react';
import style from './Completed.module.css'
const RequestCompleted = () => {
    return (
        <div>
            <div className={style.completedWrap}>
                <div className={style.completed}>
                    <h3 className={style.informationHeading}>General Information</h3>
                    <table className={style.tableWrap}>
                      
                        <tr>
                            <td><strong>Request Type</strong></td>
                            <td>Refund</td>
                            <td><strong>Actual Booking Code</strong></td>
                            <td>GTFL16731636200312</td>
                        </tr>
                        <tr>
                            <td><strong>Request Status</strong></td>
                            <td>Completed</td>
                            <td><strong>Agency</strong></td>
                            <td>Ghuronti.com</td>
                        </tr>
                        <tr>
                            <td><strong>Requested Placed On</strong></td>
                            <td>19 Jan 2023, 11:04</td>
                            <td><strong>Last Updated</strong></td>
                            <td>01 Feb 2023, 16:45</td>
                        </tr>
                        <tr>
                            <td><strong>Refund Processed Time (APX.)</strong></td>
                            <td>15 Mar 23 </td>
                            <td><strong>Reason</strong></td>
                            <td>Reason Not Specified</td>
                        </tr>
                    </table>
                  <div className="flex justify-between">
                  <div className={style.passengerInformation}>
                        <h3 className={style.informationHeading}>
                        Passenger Information
                        </h3>
                        <table className={style.passengerInfo}>
                            <tr>
                                <th>Name</th>
                                <th>E-Ticket</th>
                                <th>Gender</th>
                                <th>Date of Birth</th>
                            </tr>
                            <tr>
                                <td>Ibrahim Sikder</td>
                                <td>9979699893966</td>
                                <td>Male </td>
                                <td>15 Aug 2000</td>
                            </tr>
                        </table>
                    </div>
                    <div className={style.passengerInformation}>
                        <h3 className={style.informationHeading}>
                        Refund Charge Information
                        </h3>
                        <table className={style.passengerInfo}>
                            <tr>
                                <th><strong>Refund Applicable Amount</strong></th>
                                <th>59,990</th>
                            </tr>
                            <tr>
                                <td>Used Fare Amount</td>
                                <td>000.00</td>
                            </tr>
                            <tr>
                                <td>Penalty Amount</td>
                                <td>670.00</td>
                            </tr>
                            <tr>
                                <td>Service Charge</td>
                                <td>0.00</td>
                            </tr>
                            <tr>
                                <td><strong>Total Refund Charge</strong></td>
                                <td>7800</td>
                            </tr>
                            <tr>
                                <td><strong>Amount To Be Tefunded </strong></td>
                                <td>65,788</td>
                            </tr>
                        </table>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default RequestCompleted;