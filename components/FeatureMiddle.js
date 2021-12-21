const FeatureMiddle = () => {
	return (
		<>
			{/* banner section start */}
			<section className="feature_banner_sec">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="ftr_bnr_con">
								<div className="ftr_bnr_ttl">Create.Engage.Grow.</div>
								<p>
									Unlike long 30 - 40 minute podcasts that are created weekly or
									bi-weekly, Short-form audio can be shared regularly such as an
									audio blog post or a daily cooking recipe which we help create
									without manual effort.
								</p>
								<a href="#" className="cmn_btn_primary">
									Get Started
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* banner section end */}

			{/*create deep sync start */}
			<section className="cret_deep_sec">
				<div className="container">
					<div className="row">
						<div className="col-lg-5">
							<div className="cmn_hdng_con">
								<img src={'images/deepsync.svg'} />
								<div className="cmn_hdng_ttl">Create with Deepsync</div>
								<p>
									Deepsync syncs your voice and lets your create short form
									audio with just scripts saving not only time but also
									production costs.
								</p>
							</div>
						</div>
					</div>
					<div className="row justify-content-between">
						<div className="col-lg-5">
							<div className="crt_dpsync_con">
								<div className="crt_dpsync_ttl">Augmented Recording</div>
								<p>
									Your synced voice records short-form content for you. By
									entering a script and editing in real-time, it works 10x
									faster than manual recording.
								</p>
								<div className="crt_dpsync_img">
									<img src={'images/augmented_recording.svg'} />
								</div>
							</div>
						</div>
						<div className="col-lg-5">
							<div className="crt_dpsync_con">
								<div className="crt_dpsync_ttl">Powerful Editing</div>
								<p>
									The editor uses AI to automagically reduce friction. Mix and
									match audios, sounds and music to build the best audio
									experience.
								</p>
								<div className="crt_dpsync_img">
									<img src={'images/powerful_editing.svg'} />
								</div>
							</div>
						</div>
						<div className="col-lg-5">
							<div className="crt_dpsync_con">
								<div className="crt_dpsync_ttl">Intuitive Learning</div>
								<p>
									Deepsync supports Heteronyms, Abbreviations, Currencies,
									websites and tons of other modes. In meantime, it keeps
									getting better.
								</p>
								<div className="crt_dpsync_img">
									<img src={'images/intuitive_learning.svg'} />
								</div>
							</div>
						</div>
						<div className="col-lg-5">
							<div className="crt_dpsync_con">
								<div className="crt_dpsync_ttl">High Quality Downloads</div>
								<p>
									Download your finished audio in HD .wav file with professional
									ID3 Tags ready for sharing on all major platforms and
									channels.
								</p>
								<div className="crt_dpsync_img">
									<img src={'images/high_quality_downloads.svg'} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Create deep section end  */}

			{/* grow section start */}
			<section className="grow_engage_sec">
				<div className="container">
					<div className="row">
						<div className="col-lg-5">
							<div className="cmn_hdng_con">
								<img src={'images/grow_engage.svg'} />
								<div className="cmn_hdng_ttl">Grow & Engage with Deepsync</div>
								<p>
									Deepsync lets you share your voice across channels in high
									quality and helps you analyze and grow your listener base.
								</p>
							</div>
						</div>
					</div>
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div className="crt_dpsync_con">
								<div className="crt_dpsync_ttl">
									Export your audio & share with over 10+ channel integrations
								</div>
								<p>
									Download your audio as beautiful Audioclips and shareit with
									tons of channels with millions of listeners in one-click so
									you're always on top of the (audio) world.
								</p>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="grow_con_img">
								<img src={'images/export_audio.svg'} />
							</div>
						</div>
						<div className="col-lg-6">
							<div className="grow_con_img">
								<img src={'images/analyze.svg'} />
							</div>
						</div>
						<div className="col-lg-6">
							<div className="crt_dpsync_con">
								<div className="crt_dpsync_ttl">
									Analyze and grow your listener base with Analytics & Expert
									Guides
								</div>
								<p>
									With our In-depth Analytics, you always see the front-view of
									how your audio is performing.
								</p>
								<p>
									We craft a ton of guides and lessons for the audio community
									to help you craft great content and grow your listeners
								</p>
								<a href="#">Read More </a>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* grow section end */}

			{/* quality audio section start */}
			<section className="quality_audio_sec">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="qlty_ado_con">
								<strong>Create quality audio in any voice in minutes</strong>
								<p>
									Create, Engage and Grow your listener base with the power of
									AI.{' '}
								</p>
								<a href="#" className="cmn_btn_primary">
									Get a Demo
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* quality audio section end */}
		</>
	);
};
export default FeatureMiddle;
