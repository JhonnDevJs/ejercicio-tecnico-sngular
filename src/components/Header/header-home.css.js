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

	
	.search-box {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #f7f7f8;
		width: 200px;
		height: 39px;
		border-radius: 8px;
		gap: 0.5rem;
		padding: 8px;
	}

	.__btn-search {
		border: none;
		width: 24px;
		height: 24px;
		border-radius: 25px;
		background-color: transparent;
		padding: 0;
	}

	.__btn-search:active {
		background-color: transparent;
	}

	.__search-in {
		background-color: transparent;
		border: none;
		width: 100%;
		height: 100%;
		color: #000;
		font-size: 14px;
	}
	.__search-in:active {
		border: none;
		outline: none;
	}
	.__search-in:focus {
		border: none;
		outline: none;
	}

	.btn {
    display: flex;
    justify-content: center;
    align-items: center;
		background-color: #f7f7f8;
    border: none;
    border-radius: 8px;
    width: 154px;
    height: 40px;
    padding: 4px 4px 4px 10px;
    gap: 18px;
	}

	.__text-btn {
		font-size: 1rem;
    color: #000;
	}

	.__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 5px;
		background-color: #4339f2;
	}
`;
