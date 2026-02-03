import { css } from "lit";

export const HeaderHomeStyles = css`

	header {
		display: flex;
		flex-direction: column;

		h1 {
			text-align: center;
			font-size: 2rem;
			font-weight: bold;
			margin: 0;
		}

		p {
			text-align: center;
			font-size: 1.5rem;
			margin: 0;
		}
	}
  
	.__btns {
		display: flex;
		justify-content: space-between;
		align-items: center;
    width: 100%;
	}
`;
