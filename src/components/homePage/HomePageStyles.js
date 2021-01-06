import styled from 'styled-components';

const StyledHomePage = styled.div`
	background: ${(pr) => pr.theme.white};
	padding: 0;
	/* border: 2px solid blue; */

	.home-banner {
		display: flex;
		flex-flow: row nowrap;
		height: 100vh;
		padding: 8.5rem 2.5rem 2.5rem 2.5rem;
		/* border: 2px solid red; */
		a {
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 3.6rem;
			color: white;
			height: 100%;
			width: 100%;
			margin: 0 1rem 0 0;
			/* background-image: url('https://images.unsplash.com/photo-1597116635010-8b65f0dce76c'); */
			/* background-color: black; */
			/* background-position: center; */
			/* background-size: cover; */
			img {
				width: 50%;
				height: 50%;
				object-fit: contain;
			}
		}

		/* a:not(:first-child) {
			margin: 0 0 0 1rem;
			background-image: url('https://images.unsplash.com/photo-1606191027636-a5a286e8fd7a');
		} */
		/* img {
			border: 2px solid green;
			height: 100%;
			width: 100%;
			object-fit: cover;
		} */
	}

	@media (max-width: ${(pr) => pr.theme.tablet}) {
		.home-banner {
			/* border: 2px solid green; */
			flex-flow: column nowrap;
			a {
				margin: 0 0 1rem 0;
			}
			a:not(:first-child) {
				margin: 1rem 0 0 0;
			}
		}
	}
	@media (max-width: ${(pr) => pr.theme.phone}) {
		/* border: 1px solid green; */
		h2 {
			font-size: 4.8rem;
		}
	}
`;

export default StyledHomePage;
