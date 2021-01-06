import styled from 'styled-components';

const StyledProductCard = styled.div`
	/* border: 1px solid red; */
	line-height: 1.4;
	a {
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		justify-content: center;
	}

	img {
		width: 30rem;
		margin-bottom: 1rem;
	}

	button {
		margin-top: 1rem;
		border: none;
		border-radius: 5px;
		background-color: black;
		color: white;
		padding: 1rem;
	}

	@media (max-width: ${(pr) => pr.theme.tablet}) {
	}
`;

export default StyledProductCard;
