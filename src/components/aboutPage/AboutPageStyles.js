import styled from 'styled-components';

const StyledAboutPage = styled.div`
	/* border: 1px solid red; */
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	margin: 0 auto;
	padding-top: 8.5rem;
	width: 80%;
	.about-top {
		/* border: 1px solid blue; */
		display: flex;
		flex-flow: row nowrap;
		margin: 0 0 15rem 0;
		.about-top-imgAndLinks {
			/* border: 1px solid green; */
			display: flex;
			flex-flow: column nowrap;
			img {
				width: 35rem;
				margin: 0 0 1rem 0;
			}
			.about-top-links {
				display: flex;
				flex-flow: row nowrap;
				justify-content: space-around;
				a {
					color: ${(pr) => pr.theme.black};
				}
			}
		}
		.about-top-words {
			/* border: 1px solid salmon; */
			display: flex;
			flex-flow: column nowrap;
			margin: 0 0 0 5rem;
			width: 60%;
			h2 {
				font-size: 7.2rem;
				margin: 0 0 4rem 0;
			}
			p {
				line-height: 1.2;
				margin-bottom: 1rem;
			}
		}
	}
	.about-bottom {
		/* border: 1px solid cyan; */
		display: flex;
		flex-flow: row nowrap;
		h3 {
			font-size: 4.8rem;
		}
		.about-bottom-apiBlurbs {
			/* border: 1px solid magenta; */
			margin: 0 0 0 2rem;
			div {
				display: flex;
				flex-flow: column nowrap;
				align-items: center;
				justify-content: center;
				border: 2px solid ${(pr) => pr.theme.black};
				border-radius: 2rem;
				padding: 0.5rem 1rem;
				margin: 2rem 0 0 0;
			}
		}
	}
	@media (max-width: ${(pr) => pr.theme.tablet}) {
		.about-top {
			flex-flow: column nowrap;
			align-items: center;
			.about-top-imgAndLinks {
				margin-bottom: 2rem;
				img {
					width: 100%;
				}
			}
			.about-top-words {
				width: 100%;
			}
		}
	}
`;

export default StyledAboutPage;
