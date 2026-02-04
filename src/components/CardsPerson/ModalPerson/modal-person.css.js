import { css } from "lit";

export const ModalPersonStyles = css`
	.modal-container {
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.75);
		width: 100vw;
		height: 100vh;
		z-index: 1;
	}

	.__modal-card {
    display: flex;
    flex-direction: column;
    max-width: 260px;
    width: 100%;
    padding: 10px;
    background-color: white;
    border-radius: 6px;
    border: none;
	}

	header {
		display: flex;
		justify-content: end;
	}
	.__btn-close{
		padding: 4px 8px;
		border-radius: 8px;
		border: none;
		background-color: #FFE1E1;
		color: #C73A3A;
	}

	.__img {
    width: 100%;
    object-fit: cover;
    border-radius: 4px;
		margin-top: 10px;
  }

	.__name {
		font-weight: bold;
		text-align: center;
		margin: 8px 0;
	}
	.__tags {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 8px;
	}
	.__tag {
		padding: 5px;
		border-radius: 12px;
		font-size: 12px;
		width: auto;
		margin: 0;
	}
	.__state{
		background-color:#abe6ff;
	}
	.__gen{
		background-color:#4d89ea;
	}
	.__specie{
		background-color:#caffce;
	}
	.__origin{
		background-color:#ffea95;
	}
	.__addres{
		background-color:#ffe8a8;
	}
`;
