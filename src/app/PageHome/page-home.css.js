import { css } from "lit";

export const PageStyles = css`
	:root {
		display: block;
	}

	main {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    justify-items: center;
    align-items: center;
		background-color: #f7f7f8;
		margin-top: 1.5rem;
		padding: 1.5rem;
    gap: 1.5rem;
	}

  footer {
    text-align: center;
  }
`;
