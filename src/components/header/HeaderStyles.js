import styled from 'styled-components';

const StyledHeader = styled.header`
	position: absolute;
	background: ${(pr) => pr.theme.white};
	width: 100vw;
	/* border: 1px solid red; */
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	align-items: center;
	padding: 1.5rem 2.5rem;

	/* background-color: ${(pr) => pr.theme.white}; */
	.web-nav {
		display: initial;
		/* border: 1px solid red; */
		display: flex;
		flex-flow: row nowrap;
		align-items: baseline;
		text-transform: lowercase;
		a {
			/* border: 1px solid blue; */
			margin-left: 1.5rem;
		}
		button {
			border: none;
			background: none;
			margin-left: 1.5rem;
			padding: 0;
			:hover {
				cursor: pointer;
			}
		}
	}
	.mobile-nav {
		display: none;
		/* border: 1px solid red; */
		position: absolute;
		right: 0;
		top: 10rem;
		li {
			list-style-type: none;
			line-height: 1.3;
		}
	}
	.mobile-nav-button {
		display: none;
		border: none;
		background: none;
	}
	.mobile-nav-button:hover {
		cursor: pointer;
	}
	img {
		width: 20rem;
	}
	@media (max-width: ${(pr) => pr.theme.tablet}) {
		.web-nav {
			display: none;
		}
		.mobile-nav {
		}
		.mobile-nav-button {
			display: initial;
		}
		.inactive {
			display: none;
		}
		.active {
			display: initial;
		}
	}
`;

export default StyledHeader;
