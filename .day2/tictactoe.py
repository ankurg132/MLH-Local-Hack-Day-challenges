board = ['-','-','-','-','-','-','-','-','-']
def play_player(n):
    t = int(input("Enter player pos to play: "))
    try:
        if n==1 and board[t-1]=='-':
            board[t-1]= "X"
        elif n==2 and board[t-1]=='-':
            board[t-1]= "O"
        else:
            print("Invalid move")
    except IndexError:
        print("Invalid move")
def showboard():
    print(board[0]+" | "+board[1]+" | "+board[2])
    print(board[3]+" | "+board[4]+" | "+board[5])
    print(board[6]+" | "+board[7]+" | "+board[8])

def checkwin(pn):
    if board[0]==board[1]==board[2] != '-':
        print("Player "+str(pn)+" has won the game!")
        return True
    elif board[3]==board[4]==board[5] != '-':
        print("Player "+str(pn)+" has won the game!")
        return True
    elif board[6]==board[7]==board[8] != '-':
        print("Player "+str(pn)+" has won the game!")
        return True
    elif board[0]==board[4]==board[8] != '-':
        print("Player "+str(pn)+" has won the game!")
        return True
    elif board[2]==board[4]==board[6] != '-':
        print("Player "+str(pn)+" has won the game!")
    elif board[0]==board[3]==board[6] != '-':
        print("Player "+str(pn)+" has won the game!")
        return True
    elif board[1]==board[4]==board[7] != '-':
        print("Player "+str(pn)+" has won the game!")
        return True
    elif board[2]==board[5]==board[8] != '-':
        print("Player "+str(pn)+" has won the game!")
        return True
    else:
        return False
def play_game():
    beg = -1
    playernum = 1
    while True:
        if beg==-1:
            showboard()
        beg=1
        if playernum == 1:
            play_player(1)
            temp = 2
        else:
            play_player(2)
            temp=1
        showboard()
        if checkwin(playernum):
            break
        playernum = temp    
play_game()
