package ticTacToeChecker

func IsSolved(board [3][3]int) int {
	for i := 0; i < len(board[0]); i++ {
		if 0 != board[i][0] && board[i][1] == board[i][0] && board[i][2] == board[i][0] {
			return board[i][0]
		}
	}

	for i := 0; i < len(board[0]); i++ {
		if 0 != board[0][i] && board[1][i] == board[0][i] && board[2][i] == board[0][i] {
			return board[0][i]
		}
	}

	if 0 != board[0][0] && board[1][1] == board[0][0] && board[2][2] == board[0][0] {
		return board[0][0]
	}

	if 0 != board[0][2] && board[1][1] == board[0][2] && board[2][0] == board[0][2] {
		return board[0][2]
	}

	for i := 0; i < len(board[0]); i++ {
		for j := 0; j < len(board[0]); j++ {
			if board[i][j] == 0 {
				return -1
			}
		}
	}

	return 0
}
