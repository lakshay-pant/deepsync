const Footer = () => {
	return (
		<>
			<footer>
				<div className="container">
					<div className="row">
						<div className="col-lg-5">
							<div className="ftr_lgo">
								<img src={'images/logo.svg'} />
							</div>
						</div>
						<div className="col-lg">
							<div className="ftr_lnks_sngl">
								<div className="ftr_lnks_ttl">Product</div>
								<ul>
									<li>
										<a href="#">Features</a>
									</li>
									<li>
										<a href="#">Pricing</a>
									</li>
									<li>
										<a href="#">Login</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg">
							<div className="ftr_lnks_sngl">
								<div className="ftr_lnks_ttl">Product</div>
								<ul>
									<li>
										<a href="#">Features</a>
									</li>
									<li>
										<a href="#">Pricing</a>
									</li>
									<li>
										<a href="#">Login</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg">
							<div className="ftr_lnks_sngl">
								<div className="ftr_lnks_ttl">Resources</div>
								<ul>
									<li>
										<a href="#">Terms & Condition</a>
									</li>
									<li>
										<a href="#">Privacy Policy</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="col">
							<div className="ftr_lnks_sngl">
								<div className="ftr_lnks_ttl">Contact Us</div>
								<ul>
									<li>
										<a href="mailto:example@deepsync.co">example@deepsync.co</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<div className="ftr_btm_prt">
								<ul>
									<li>
										<a href="#">
											<img src={'images/social1.svg'} />
										</a>
									</li>
									<li>
										<a href="#">
											<img src={'images/social2.svg'} />
										</a>
									</li>
									<li>
										<a href="#">
											<img src={'images/social3.svg'} />
										</a>
									</li>
								</ul>
								<ul>
									<li>© 2021 Deepsync Technologies. All Rights Reserved. </li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};
export default Footer;
