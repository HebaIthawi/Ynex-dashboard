import './Dashboard.css'
import { MdOutlineShoppingBag } from "react-icons/md";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import r_o_phone from '../../assets/1-C_sMfEby.jpg'
import r_o_headphone from '../../assets/2-CJUot7Yq.jpg';
import r_o_watch from '../../assets/download (2).jpeg'
import r_o_camera from '../../assets/download (1).jpeg'
import r_o_frame from '../../assets/5-BX0RNEQc.jpg'
import r_o_shose from '../../assets/6-CV4gtKs2.jpg'
import ao_u_img1 from '../../assets/4-CyNZzJ-C.jpg'
import ao_u_img2 from '../../assets/download (3).jpeg'
import ao_u_img3 from '../../assets/download (4).jpeg'
import ao_u_img4 from '../../assets/5-9x1kob0t.jpg'
import ao_u_img5 from '../../assets/14-B6l3Yik4.jpg'
import ao_u1_pro1 from '../../assets/1-DAsA0uct.png'
import ao_u2_pro2 from '../../assets/2-DMRzDw07.png'
import ao_u3_pro3 from '../../assets/3-DKEZOTIS.png'
import ao_u4_pro4 from '../../assets/4-D8JE7EAo.png'
import ao_u5_pro5 from '../../assets/5-D0LVVgbN.png'

import Charts from './Chart' 
function Dashboard() {
        return (
        <>
            <div className="dashboard-style">
                <div className='d-flex'>
                    <div className='sales-div'>
                        <div className='sales-details'>
                            {/* 1 */}
                            <div className='d-flex' style={{marginBottom:'24px'}}>
                                <div className='total-sales d-flex justify-content-between'>
                                    <div className='d-flex align-items-center'>
                                        <div className='sales-icon'>
                                            <div className='icon-span1'>
                                                <MdOutlineShoppingBag className='icon-style'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{width:'169px'}}>
                                        <div className='mb-1'>
                                            <p className='icon-p'>Total Sales</p>
                                        </div>
                                        <div>
                                            <p className='icon-price'>14,987</p>
                                        </div>
                                        <div>
                                            <p className='details'>Increase by<span className='per-sales'>+4.2%</span>  this month</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='total-expense d-flex justify-content-between'>
                                    <div className='d-flex align-items-center'>
                                        <div className='expense-icon'>
                                            <div className='icon-span2'>
                                                <LiaFileInvoiceDollarSolid className='icon-style'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{width:'169px'}}>
                                        <div className='mb-1'>
                                            <p className='icon-p'>Total Expenses</p>
                                        </div>
                                        <div>
                                            <p className='icon-price'>$28,346.00</p>
                                        </div>
                                        <div>
                                            <p className='details'>Increase by<span className='per-sales'>+12.0%</span>  this month</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* 2 */}
                            <div className='d-flex'>
                                <div className='total-sales d-flex justify-content-between'>
                                    <div className='d-flex align-items-center'>
                                        <div className='visitor-icon'>
                                            <div className='icon-span3'>
                                                <FaRegUser className='icon-style'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{width:'169px'}}>
                                        <div className='mb-1'>
                                            <p className='icon-p'>Total Visitors</p>
                                        </div>
                                        <div>
                                            <p className='icon-price'>1,39,988</p>
                                        </div>
                                        <div>
                                            <p className='details'>Increase by<span className='per-sales'>+7.2%</span>  this month</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='total-expense d-flex justify-content-between'>
                                    <div className='d-flex align-items-center'>
                                        <div className='orders-icon'>
                                            <div className='icon-span4'>
                                                <MdOutlineShoppingCart className='icon-style'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{width:'169px'}}>
                                        <div className='mb-1'>
                                            <p className='icon-p'>Total Orders</p>
                                        </div>
                                        <div>
                                            <p className='icon-price'>35,998</p>
                                        </div>
                                        <div>
                                            <p className='details'>Increase by<span className='per-sales'>+99.0%</span>  this month</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='recent-order d-flex'>
                            <div className='notify-box'>
                                <div className='card-img'>
                                    <div className='img-inner-detail'>
                                        <div className='company-offer-d'>
                                            <p className='company-n'>Spruko Official.Inc</p>
                                            <p className='offer-n'>BIG SAVING DAYS</p>
                                        </div>
                                        <div className='c-o-detail'>
                                            <p style={{color:'#fff',fontSize:'12px'}}>Bank Offer 10% off on Aches Bank Credit Cards, up to $10. On orders of $500 and above T&C</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='notify-btn-d'>
                                    <p className='b-s-back'>Biggest sale is back.</p>
                                    <p style={{color:'#333335',fontSize:'13.008px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore harum accusamus eum dolorum sapiente. Saepe</p>
                                    <div>
                                        <button className='notify-btn'>Notify Me</button>
                                        <button className='offer-btn'>Offers</button>
                                    </div>
                                </div>
                            </div>
                            <div className='r-order-list'>
                                <div className='r-ord'>
                                    <p>Recent Orders</p>
                                </div>
                                <div className='recent-box-body'>
                                    <div className='r-o-detail mb-3 d-flex'>
                                        <div>
                                            <img src={r_o_phone}/>
                                        </div>
                                        <div style={{width:'154.31px',marginLeft:'8px'}}>
                                            <p className='product-list'>Smart Phone</p>
                                            <p className='pro-p-list'>Mobiles</p>
                                        </div>
                                        <div className='d-flex align-items-center'>
                                            <p className='ro-pro-price'>$199.99</p>
                                        </div>
                                    </div>
                                    <div className='r-o-detail mb-3 d-flex'>
                                        <div>
                                            <img src={r_o_headphone}/>
                                        </div>
                                        <div style={{width:'154.31px',marginLeft:'8px'}}>
                                            <p className='product-list'>Smart Phone</p>
                                            <p className='pro-p-list'>Mobiles</p>
                                        </div>
                                        <div className='d-flex align-items-center'>
                                            <p className='ro-pro-price'>$199.99</p>
                                        </div>
                                    </div>
                                    <div className='r-o-detail mb-3 d-flex'>
                                        <div>
                                            <img src={r_o_watch}/>
                                        </div>
                                        <div style={{width:'154.31px',marginLeft:'8px'}}>
                                            <p className='product-list'>Smart Phone</p>
                                            <p className='pro-p-list'>Mobiles</p>
                                        </div>
                                        <div className='d-flex align-items-center'>
                                            <p className='ro-pro-price'>$199.99</p>
                                        </div>
                                    </div>
                                    <div className='r-o-detail mb-3 d-flex'>
                                        <div>
                                            <img src={r_o_camera}/>
                                        </div>
                                        <div style={{width:'154.31px',marginLeft:'8px'}}>
                                            <p className='product-list'>Smart Phone</p>
                                            <p className='pro-p-list'>Mobiles</p>
                                        </div>
                                        <div className='d-flex align-items-center'>
                                            <p className='ro-pro-price'>$199.99</p>
                                        </div>
                                    </div>
                                    <div className='r-o-detail mb-3 d-flex'>
                                        <div>
                                            <img src={r_o_frame}/>
                                        </div>
                                        <div style={{width:'154.31px',marginLeft:'8px'}}>
                                            <p className='product-list'>Smart Phone</p>
                                            <p className='pro-p-list'>Mobiles</p>
                                        </div>
                                        <div className='d-flex align-items-center'>
                                            <p className='ro-pro-price'>$199.99</p>
                                        </div>
                                    </div>
                                    <div className='r-o-detail mb-3 d-flex'>
                                        <div>
                                            <img src={r_o_shose}/>
                                        </div>
                                        <div style={{width:'154.31px',marginLeft:'8px'}}>
                                            <p className='product-list'>Smart Phone</p>
                                            <p className='pro-p-list'>Mobiles</p>
                                        </div>
                                        <div className='d-flex align-items-center'>
                                            <p className='ro-pro-price'>$199.99</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* orders div */}
                        <div className='order-details-div'>
                            <div className='order-box-title d-flex justify-content-between'>
                                <div>
                                    <p className='title-o'>Orders</p>
                                </div>
                                <div className='o-condition'>
                                    <a href='#' className='active-o-box'>Active Orders</a>
                                    <a href='#'>Completed</a>
                                    <a href='#'>Canceled</a>
                                </div>
                            </div>
                            <div className='active-o-details'>
                                {/* active order 1 */}
                                <div className='orders-list-active d-flex'>
                                    <div className='ao_user d-flex'>
                                        <div className='user_img d-flex align-items-center'>
                                            <img src={ao_u_img1}/>
                                        </div>
                                        <div className='user_details'>
                                            <span>Name</span>
                                            <p>Amanda Nanes</p>
                                        </div>
                                    </div>
                                    <div className='ao_price'>
                                        <span>Price</span>
                                        <p>$299.99</p>
                                    </div>
                                    <div className='ao_date'>
                                        <span>Delivery Date</span>
                                        <p>24 May 2022</p>
                                    </div>
                                    <div className='ao_img'>
                                        <img src={ao_u1_pro1}/>
                                    </div>
                                    <div className='ao_icon d-flex align-items-center'>
                                        <FaAngleRight/>
                                    </div>
                                </div>
                                {/* active order 2 */}
                                <div className='orders-list-active d-flex'>
                                    <div className='ao_user d-flex'>
                                        <div className='user_img d-flex align-items-center'>
                                            <img src={ao_u_img2}/>
                                        </div>
                                        <div className='user_details'>
                                            <span>Name</span>
                                            <p>Amanda Nanes</p>
                                        </div>
                                    </div>
                                    <div className='ao_price'>
                                        <span>Price</span>
                                        <p>$299.99</p>
                                    </div>
                                    <div className='ao_date'>
                                        <span>Delivery Date</span>
                                        <p>24 May 2022</p>
                                    </div>
                                    <div className='ao_img'>
                                        <img src={ao_u2_pro2}/>
                                    </div>
                                    <div className='ao_icon d-flex align-items-center'>
                                        <FaAngleRight/>
                                    </div>
                                </div>
                                {/* active order 3 */}
                                <div className='orders-list-active d-flex'>
                                    <div className='ao_user d-flex'>
                                        <div className='user_img d-flex align-items-center'>
                                            <img src={ao_u_img3}/>
                                        </div>
                                        <div className='user_details'>
                                            <span>Name</span>
                                            <p>Amanda Nanes</p>
                                        </div>
                                    </div>
                                    <div className='ao_price'>
                                        <span>Price</span>
                                        <p>$299.99</p>
                                    </div>
                                    <div className='ao_date'>
                                        <span>Delivery Date</span>
                                        <p>24 May 2022</p>
                                    </div>
                                    <div className='ao_img'>
                                        <img src={ao_u3_pro3}/>
                                    </div>
                                    <div className='ao_icon d-flex align-items-center'>
                                        <FaAngleRight/>
                                    </div>
                                </div>
                                {/* active order 4 */}
                                <div className='orders-list-active d-flex'>
                                    <div className='ao_user d-flex'>
                                        <div className='user_img d-flex align-items-center'>
                                            <img src={ao_u_img4}/>
                                        </div>
                                        <div className='user_details'>
                                            <span>Name</span>
                                            <p>Amanda Nanes</p>
                                        </div>
                                    </div>
                                    <div className='ao_price'>
                                        <span>Price</span>
                                        <p>$299.99</p>
                                    </div>
                                    <div className='ao_date'>
                                        <span>Delivery Date</span>
                                        <p>24 May 2022</p>
                                    </div>
                                    <div className='ao_img'>
                                        <img src={ao_u4_pro4}/>
                                    </div>
                                    <div className='ao_icon d-flex align-items-center'>
                                        <FaAngleRight/>
                                    </div>
                                </div>
                                {/* active order 5 */}
                                <div className='orders-list-active d-flex'>
                                    <div className='ao_user d-flex'>
                                        <div className='user_img d-flex align-items-center'>
                                            <img src={ao_u_img5}/>
                                        </div>
                                        <div className='user_details'>
                                            <span>Name</span>
                                            <p>Amanda Nanes</p>
                                        </div>
                                    </div>
                                    <div className='ao_price'>
                                        <span>Price</span>
                                        <p>$299.99</p>
                                    </div>
                                    <div className='ao_date'>
                                        <span>Delivery Date</span>
                                        <p>24 May 2022</p>
                                    </div>
                                    <div className='ao_img'>
                                        <img src={ao_u5_pro5}/>
                                    </div>
                                    <div className='ao_icon d-flex align-items-center'>
                                        <FaAngleRight/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* orders div end */}
                    </div>
                    <div className='sales-chart'>
                        <div className='chart-box'>
                            <div className='chart-title'>
                                <p>Earnings</p>
                            </div>
                            <div className='charts-box'>
                                <Charts/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard