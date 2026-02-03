import { css } from "lit";

export const SearchBarStyles = css`
	:host {
		display: flex;
		width: 200px;
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
`;
