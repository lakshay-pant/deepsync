import Link from 'next/link';

const Header = () => {
	return (
		<header>
			<div className="container">
				<nav className="navbar navbar-expand-lg">
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarTogglerDemo03"
						aria-controls="navbarTogglerDemo03"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<a className="navbar-brand" href="#">
						<img src={'images/logo.svg'} />
					</a>

					<div className="collapse navbar-collapse" id="navbarTogglerDemo03">
						<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
							<li className="nav-item">
								<Link href="/home">
									<a className="nav-link" href="#">
										Home
									</a>
								</Link>
							</li>
							<li className="nav-item active">
								<Link href="/features">
									<a className="nav-link" href="#">
										Features
									</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link href="/pricing">
									<a className="nav-link" href="#">
										Pricing
									</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link href="/about">
									<a className="nav-link" href="#">
										About
									</a>
								</Link>
							</li>
						</ul>
					</div>
					<ul className="hdr_lgn">
						<li>
							<Link href="/login">
								<a href="#" className="cmn_btn_primary">
									Login
								</a>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
