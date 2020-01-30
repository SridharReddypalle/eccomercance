import React, { Component } from 'react'

export default class Products extends Component {
    render() {
        return (
            <div>
           {/*<!-- top Products -->*/} 
	<div className="ads-grid">
		<div className="container">
			{/*<!-- tittle heading -->*/}
			<h3 className="tittle-w3l">Our Top Products
				<span className="heading-style">
					<i></i>
					<i></i>
					<i></i>
				</span>
			</h3>
			{/*<!-- //tittle heading -->
            <!-- product left -->*/}
			<div className="side-bar col-md-3">
				<div className="search-hotel">
					<h3 className="agileits-sear-head">Search Here..</h3>
					<form action="#" method="post">
						<input type="search" placeholder="Product name..." name="search" required=""/>
						<input type="submit" value=" "/>
					</form>
				</div>
				{/*<!-- price range -->*/}
				<div className="range">
					<h3 className="agileits-sear-head">Price range</h3>
					<ul className="dropdown-menu6">
						<li>

							<div id="slider-range"></div>
                            <input type="text" id="amount" style={{border: "0", color: "#ffffff",fontWeight:"normal"}} 
                            />
						</li>
					</ul>
				</div>
				{/*<!-- //price range -->
				<!-- food preference -->*/}
				<div className="left-side">
					<h3 className="agileits-sear-head">Food Preference</h3>
					<ul>
						<li>
							<input type="checkbox" className="checked"/>
							<span className="span">Vegetarian</span>
						</li>
						<li>
							<input type="checkbox" className="checked"/>
							<span className="span">Non-Vegetarian</span>
						</li>
					</ul>
				</div>
				{/*<!-- //food preference -->
				<!-- discounts -->*/}
				<div className="left-side">
					<h3 className="agileits-sear-head">Discount</h3>
					<ul>
						<li>
							<input type="checkbox" className="checked"/>
							<span className="span">5% or More</span>
						</li>
						<li>
							<input type="checkbox" className="checked"/>
							<span className="span">10% or More</span>
						</li>
						<li>
							<input type="checkbox" className="checked"/>
							<span className="span">20% or More</span>
						</li>
						<li>
							<input type="checkbox" className="checked"/>
							<span className="span">30% or More</span>
						</li>
						<li>
							<input type="checkbox" className="checked"/>
							<span className="span">50% or More</span>
						</li>
						<li>
							<input type="checkbox" className="checked"/>
							<span className="span">60% or More</span>
						</li>
					</ul>
				</div>
				{/*<!-- //discounts -->*/}
				{/*<!-- reviews -->*/}
				<div className="customer-rev left-side">
					<h3 className="agileits-sear-head">Customer Review</h3>
					<ul>
						<li>
							<a href="#">
								<i className="fa fa-star" aria-hidden="true"></i>
								<i className="fa fa-star" aria-hidden="true"></i>
								<i className="fa fa-star" aria-hidden="true"></i>
								<i className="fa fa-star" aria-hidden="true"></i>
								<i className="fa fa-star" aria-hidden="true"></i>
								<span>5.0</span>
							</a>
						</li>
						<li>
							<a href="#">
								<i className="fa fa-star" aria-hidden="true"></i>
								<i className="fa fa-star" aria-hidden="true"></i>
								<i className="fa fa-star" aria-hidden="true"></i>
								<i className="fa fa-star" aria-hidden="true"></i>
								<i className="fa fa-star-o" aria-hidden="true"></i>
								<span>4.0</span>
							</a>
						</li>
						<li>
							<a href="#">
								<i className="fa fa-star" aria-hidden="true"></i>
								<i className="fa fa-star" aria-hidden="true"></i>
								<i className="fa fa-star" aria-hidden="true"></i>
								<i className="fa fa-star-half-o" aria-hidden="true"></i>
								<i className="fa fa-star-o" aria-hidden="true"></i>
								<span>3.5</span>
							</a>
						</li>
						<li>
							<a href="#">
								<i className="fa fa-star" aria-hidden="true"></i>
								<i className="fa fa-star" aria-hidden="true"></i>
								<i className="fa fa-star" aria-hidden="true"></i>
								<i className="fa fa-star-o" aria-hidden="true"></i>
								<i className="fa fa-star-o" aria-hidden="true"></i>
								<span>3.0</span>
							</a>
						</li>
						<li>
							<a href="#">
								<i className="fa fa-star" aria-hidden="true"></i>
								<i className="fa fa-star" aria-hidden="true"></i>
								<i className="fa fa-star-half-o" aria-hidden="true"></i>
								<i className="fa fa-star-o" aria-hidden="true"></i>
								<i className="fa fa-star-o" aria-hidden="true"></i>
								<span>2.5</span>
							</a>
						</li>
					</ul>
				</div>
				{/*<!-- //reviews -->
                <!-- cuisine -->*/}
				<div className="left-side">
					<h3 className="agileits-sear-head">Cuisine</h3>
					<ul>
						<li>
							<input type="checkbox" className="checked"/>
							<span className="span">South American</span>
						</li>
						<li>
							<input type="checkbox" className="checked"/>
							<span className="span">French</span>
						</li>
						<li>
							<input type="checkbox" className="checked"/>
							<span className="span">Greek</span>
						</li>
						<li>
							<input type="checkbox" className="checked"/>
							<span className="span">Chinese</span>
						</li>
						<li>
							<input type="checkbox" className="checked"/>
							<span className="span">Japanese</span>
						</li>
						<li>
							<input type="checkbox" className="checked"/>
							<span className="span">Italian</span>
						</li>
						<li>
							<input type="checkbox" className="checked"/>
							<span className="span">Mexican</span>
						</li>
						<li>
							<input type="checkbox" className="checked"/>
							<span className="span">Thai</span>
						</li>
						<li>
							<input type="checkbox" className="checked"/>
							<span className="span">Indian</span>
						</li>
						<li>
							<input type="checkbox" className="checked"/>
							<span className="span"> Spanish </span>
						</li>
					</ul>
				</div>
				{/*<!-- //cuisine -->
                <!-- deals -->*/}
				<div className="deal-leftmk left-side">
					<h3 className="agileits-sear-head">Special Deals</h3>
					<div className="special-sec1">
						<div className="col-xs-4 img-deals">
							<img src="images/d2.jpg" alt=""/>
						</div>
						<div className="col-xs-8 img-deal1">
							<h3>Lay's Potato Chips</h3>
							<a href="single.html">$18.00</a>
						</div>
						<div className="clearfix"></div>
					</div>
					<div className="special-sec1">
						<div className="col-xs-4 img-deals">
							<img src="images/d1.jpg" alt=""/>
						</div>
						<div className="col-xs-8 img-deal1">
							<h3>Bingo Mad Angles</h3>
							<a href="single.html">$9.00</a>
						</div>
						<div className="clearfix"></div>
					</div>
					<div className="special-sec1">
						<div className="col-xs-4 img-deals">
							<img src="images/d4.jpg" alt=""/>
						</div>
						<div className="col-xs-8 img-deal1">
							<h3>Tata Salt</h3>
							<a href="single.html">$15.00</a>
						</div>
						<div className="clearfix"></div>
					</div>
					<div className="special-sec1">
						<div className="col-xs-4 img-deals">
							<img src="images/d5.jpg" alt=""/>
						</div>
						<div className="col-xs-8 img-deal1">
							<h3>Gujarat Dry Fruit</h3>
							<a href="single.html">$525.00</a>
						</div>
						<div className="clearfix"></div>
					</div>
					<div className="special-sec1">
						<div className="col-xs-4 img-deals">
							<img src="images/d3.jpg" alt=""/>
						</div>
						<div className="col-xs-8 img-deal1">
							<h3>Cadbury Dairy Milk</h3>
							<a href="single.html">$149.00</a>
						</div>
						<div className="clearfix"></div>
					</div>
				</div>
				{/*<!-- //deals -->*/}
			</div>
		{/*	<!-- //product left -->
            <!-- product right -->
        */}
			<div className="agileinfo-ads-display col-md-9">
				<div className="wrapper">
					{/*<!-- first section (nuts) -->*/}
					<div className="product-sec1">
						<h3 className="heading-tittle">Nuts</h3>
						<div className="col-md-4 product-men">
							<div className="men-pro-item simpleCart_shelfItem">
								<div className="men-thumb-item">
									<img src="images/m1.jpg" alt=""/>
									<div className="men-cart-pro">
										<div className="inner-men-cart-pro">
											<a href="single.html" className="link-product-add-cart">Quick View</a>
										</div>
									</div>
									<span className="product-new-top">New</span>
								</div>
								<div className="item-info-product ">
									<h4>
										<a href="single.html">Almonds, 100g</a>
									</h4>
									<div className="info-product-price">
										<span className="item_price">$149.00</span>
										<del>$280.00</del>
									</div>
									<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
										<form action="#" method="post">
											<fieldset>
												<input type="hidden" name="cmd" value="_cart" />
												<input type="hidden" name="add" value="1" />
												<input type="hidden" name="business" value=" " />
												<input type="hidden" name="item_name" value="Almonds, 100g" />
												<input type="hidden" name="amount" value="149.00" />
												<input type="hidden" name="discount_amount" value="1.00" />
												<input type="hidden" name="currency_code" value="USD" />
												<input type="hidden" name="return" value=" " />
												<input type="hidden" name="cancel_return" value=" " />
												<input type="submit" name="submit" value="Add to cart" className="button" />
											</fieldset>
										</form>
									</div>

								</div>
							</div>
						</div>
						<div className="col-md-4 product-men">
							<div className="men-pro-item simpleCart_shelfItem">
								<div className="men-thumb-item">
									<img src="images/m2.jpg" alt=""/>
									<div className="men-cart-pro">
										<div className="inner-men-cart-pro">
											<a href="single.html" className="link-product-add-cart">Quick View</a>
										</div>
									</div>
									<span className="product-new-top">New</span>

								</div>
								<div className="item-info-product ">
									<h4>
										<a href="single.html">Cashew Nuts, 100g</a>
									</h4>
									<div className="info-product-price">
										<span className="item_price">$200.00</span>
										<del>$420.00</del>
									</div>
									<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
										<form action="#" method="post">
											<fieldset>
												<input type="hidden" name="cmd" value="_cart" />
												<input type="hidden" name="add" value="1" />
												<input type="hidden" name="business" value=" " />
												<input type="hidden" name="item_name" value="Cashew Nuts, 100g" />
												<input type="hidden" name="amount" value="200.00" />
												<input type="hidden" name="discount_amount" value="1.00" />
												<input type="hidden" name="currency_code" value="USD" />
												<input type="hidden" name="return" value=" " />
												<input type="hidden" name="cancel_return" value=" " />
												<input type="submit" name="submit" value="Add to cart" className="button" />
											</fieldset>
										</form>
									</div>

								</div>
							</div>
						</div>
						<div className="col-md-4 product-men">
							<div className="men-pro-item simpleCart_shelfItem">
								<div className="men-thumb-item">
									<img src="images/m3.jpg" alt=""/>
									<div className="men-cart-pro">
										<div className="inner-men-cart-pro">
											<a href="single.html" className="link-product-add-cart">Quick View</a>
										</div>
									</div>
									<span className="product-new-top">New</span>

								</div>
								<div className="item-info-product ">
									<h4>
										<a href="single.html">Pista..., 250g</a>
									</h4>
									<div className="info-product-price">
										<span className="item_price">$520.99</span>
										<del>$600.99</del>
									</div>
									<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
										<form action="#" method="post">
											<fieldset>
												<input type="hidden" name="cmd" value="_cart" />
												<input type="hidden" name="add" value="1" />
												<input type="hidden" name="business" value=" " />
												<input type="hidden" name="item_name" value="Pista, 250g" />
												<input type="hidden" name="amount" value="520.99" />
												<input type="hidden" name="discount_amount" value="1.00" />
												<input type="hidden" name="currency_code" value="USD" />
												<input type="hidden" name="return" value=" " />
												<input type="hidden" name="cancel_return" value=" " />
												<input type="submit" name="submit" value="Add to cart" className="button" />
											</fieldset>
										</form>
									</div>

								</div>
							</div>
						</div>
						<div className="clearfix"></div>
					</div>
				{/*	<!-- //first section (nuts) -->
                <!-- second section (nuts special) -->*/}
					<div className="product-sec1 product-sec2">
						<div className="col-xs-7 effect-bg">
							<h3 className="">Pure Energy</h3>
							<h6>Enjoy our all healthy Products</h6>
							<p>Get Extra 10% Off</p>
						</div>
						<h3 className="w3l-nut-middle">Nuts & Dry Fruits</h3>
						<div className="col-xs-5 bg-right-nut">
							<img src="images/nut1.png" alt=""/>
						</div>
						<div className="clearfix"></div>
					</div>
					{/*<!-- //second section (nuts special) -->
                    <!-- third section (oils) -->
                    */}
					<div className="product-sec1">
						<h3 className="heading-tittle">Oils</h3>
						<div className="col-md-4 product-men">
							<div className="men-pro-item simpleCart_shelfItem">
								<div className="men-thumb-item">
									<img src="images/mk4.jpg" alt=""/>
									<div className="men-cart-pro">
										<div className="inner-men-cart-pro">
											<a href="single.html" className="link-product-add-cart">Quick View</a>
										</div>
									</div>
									<span className="product-new-top">New</span>
								</div>
								<div className="item-info-product ">
									<h4>
										<a href="single.html">Freedom Oil, 1L</a>
									</h4>
									<div className="info-product-price">
										<span className="item_price">$78.00</span>
										<del>$110.00</del>
									</div>
									<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
										<form action="#" method="post">
											<fieldset>
												<input type="hidden" name="cmd" value="_cart" />
												<input type="hidden" name="add" value="1" />
												<input type="hidden" name="business" value=" " />
												<input type="hidden" name="item_name" value="Freedom Sunflower Oil, 1L" />
												<input type="hidden" name="amount" value="78.00" />
												<input type="hidden" name="discount_amount" value="1.00" />
												<input type="hidden" name="currency_code" value="USD" />
												<input type="hidden" name="return" value=" " />
												<input type="hidden" name="cancel_return" value=" " />
												<input type="submit" name="submit" value="Add to cart" className="button" />
											</fieldset>
										</form>
									</div>

								</div>
							</div>
						</div>
						<div className="col-md-4 product-men">
							<div className="men-pro-item simpleCart_shelfItem">
								<div className="men-thumb-item">
									<img src="images/mk5.jpg" alt=""/>
									<div className="men-cart-pro">
										<div className="inner-men-cart-pro">
											<a href="single.html" className="link-product-add-cart">Quick View</a>
										</div>
									</div>
									<span className="product-new-top">New</span>

								</div>
								<div className="item-info-product ">
									<h4>
										<a href="single.html">Saffola Gold, 1L</a>
									</h4>
									<div className="info-product-price">
										<span className="item_price">$130.00</span>
										<del>$150.00</del>
									</div>
									<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
										<form action="#" method="post">
											<fieldset>
												<input type="hidden" name="cmd" value="_cart" />
												<input type="hidden" name="add" value="1" />
												<input type="hidden" name="business" value=" " />
												<input type="hidden" name="item_name" value="Saffola Gold, 1L" />
												<input type="hidden" name="amount" value="130.00" />
												<input type="hidden" name="discount_amount" value="1.00" />
												<input type="hidden" name="currency_code" value="USD" />
												<input type="hidden" name="return" value=" " />
												<input type="hidden" name="cancel_return" value=" " />
												<input type="submit" name="submit" value="Add to cart" className="button" />
											</fieldset>
										</form>
									</div>

								</div>
							</div>
						</div>
						<div className="col-md-4 product-men">
							<div className="men-pro-item simpleCart_shelfItem">
								<div className="men-thumb-item">
									<img src="images/mk6.jpg" alt=""/>
									<div className="men-cart-pro">
										<div className="inner-men-cart-pro">
											<a href="single.html" className="link-product-add-cart">Quick View</a>
										</div>
									</div>
									<span className="product-new-top">New</span>

								</div>
								<div className="item-info-product ">
									<h4>
										<a href="single.html">Fortune Oil, 5L</a>
									</h4>
									<div className="info-product-price">
										<span className="item_price">$399.99</span>
										<del>$500.00</del>
									</div>
									<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
										<form action="#" method="post">
											<fieldset>
												<input type="hidden" name="cmd" value="_cart" />
												<input type="hidden" name="add" value="1" />
												<input type="hidden" name="business" value=" " />
												<input type="hidden" name="item_name" value="Fortune Oil, 5L" />
												<input type="hidden" name="amount" value="399.99" />
												<input type="hidden" name="discount_amount" value="1.00" />
												<input type="hidden" name="currency_code" value="USD" />
												<input type="hidden" name="return" value=" " />
												<input type="hidden" name="cancel_return" value=" " />
												<input type="submit" name="submit" value="Add to cart" className="button" />
											</fieldset>
										</form>
									</div>

								</div>
							</div>
						</div>
						<div className="clearfix"></div>
					</div>
					{/*<!-- //third section (oils) -->
                    <!-- fourth section (noodles) --> */}
					<div className="product-sec1">
						<h3 className="heading-tittle">Pasta & Noodles</h3>
						<div className="col-md-4 product-men">
							<div className="men-pro-item simpleCart_shelfItem">
								<div className="men-thumb-item">
									<img src="images/mk7.jpg" alt=""/>
									<div className="men-cart-pro">
										<div className="inner-men-cart-pro">
											<a href="single.html" className="link-product-add-cart">Quick View</a>
										</div>
									</div>
								</div>
								<div className="item-info-product ">
									<h4>
										<a href="single.html">Yippee Noodles, 65g</a>
									</h4>
									<div className="info-product-price">
										<span className="item_price">$15.00</span>
										<del>$25.00</del>
									</div>
									<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
										<form action="#" method="post">
											<fieldset>
												<input type="hidden" name="cmd" value="_cart" />
												<input type="hidden" name="add" value="1" />
												<input type="hidden" name="business" value=" " />
												<input type="hidden" name="item_name" value="YiPPee Noodles, 65g" />
												<input type="hidden" name="amount" value="15.00" />
												<input type="hidden" name="discount_amount" value="1.00" />
												<input type="hidden" name="currency_code" value="USD" />
												<input type="hidden" name="return" value=" " />
												<input type="hidden" name="cancel_return" value=" " />
												<input type="submit" name="submit" value="Add to cart" className="button" />
											</fieldset>
										</form>
									</div>

								</div>
							</div>
						</div>
						<div className="col-md-4 product-men">
							<div className="men-pro-item simpleCart_shelfItem">
								<div className="men-thumb-item">
									<img src="images/mk8.jpg" alt=""/>
									<div className="men-cart-pro">
										<div className="inner-men-cart-pro">
											<a href="single.html" className="link-product-add-cart">Quick View</a>
										</div>
									</div>
									<span className="product-new-top">New</span>

								</div>
								<div className="item-info-product ">
									<h4>
										<a href="single.html">Wheat Pasta, 500g</a>
									</h4>
									<div className="info-product-price">
										<span className="item_price">$98.00</span>
										<del>$120.00</del>
									</div>
									<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
										<form action="#" method="post">
											<fieldset>
												<input type="hidden" name="cmd" value="_cart" />
												<input type="hidden" name="add" value="1" />
												<input type="hidden" name="business" value=" " />
												<input type="hidden" name="item_name" value="Wheat Pasta, 500g" />
												<input type="hidden" name="amount" value="98.00" />
												<input type="hidden" name="discount_amount" value="1.00" />
												<input type="hidden" name="currency_code" value="USD" />
												<input type="hidden" name="return" value=" " />
												<input type="hidden" name="cancel_return" value=" " />
                                                <input type="submit" name="submit" value="Add to cart" 
                                                className="button" />
											</fieldset>
										</form>
									</div>

								</div>
							</div>
						</div>
						<div className="col-md-4 product-men">
							<div className="men-pro-item simpleCart_shelfItem">
								<div className="men-thumb-item">
									<img src="images/mk9.jpg" alt=""/>
									<div className="men-cart-pro">
										<div className="inner-men-cart-pro">
											<a href="single.html" className="link-product-add-cart">Quick View</a>
										</div>
									</div>
									<span className="product-new-top">New</span>

								</div>
								<div className="item-info-product ">
									<h4>
										<a href="single.html">Chinese Noodles, 68g</a>
									</h4>
									<div className="info-product-price">
										<span className="item_price">$11.99</span>
										<del>$15.00</del>
									</div>
									<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
										<form action="#" method="post">
											<fieldset>
												<input type="hidden" name="cmd" value="_cart" />
												<input type="hidden" name="add" value="1" />
												<input type="hidden" name="business" value=" " />
												<input type="hidden" name="item_name" value="Chinese Noodles, 68g" />
												<input type="hidden" name="amount" value="11.99" />
												<input type="hidden" name="discount_amount" value="1.00" />
												<input type="hidden" name="currency_code" value="USD" />
												<input type="hidden" name="return" value=" " />
												<input type="hidden" name="cancel_return" value=" " />
                                                <input type="submit" name="submit" value="Add to cart" 
                                                className="button" />
											</fieldset>
										</form>
									</div>

								</div>
							</div>
						</div>
						<div className="clearfix"></div>
					</div>
					{/*<!-- //fourth section (noodles) -->*/}
				</div>
			</div>
			{/*<!-- //product right -->*/}
		</div>
	</div>
   {/* top products*/} 
    </div>
    
        )
    }
}
