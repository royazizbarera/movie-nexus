const data = `Toy Story \thttps://images-na.ssl-images-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg
Jumanji \thttps://images-na.ssl-images-amazon.com/images/M/MV5BZTk2ZmUwYmEtNTcwZS00YmMyLWFkYjMtNTRmZDA3YWExMjc2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY268_CR10,0,182,268_AL_.jpg
Waiting to Exhale \thttps://images-na.ssl-images-amazon.com/images/M/MV5BMTczMTMyMTgyM15BMl5BanBnXkFtZTcwOTc4OTQyMQ@@._V1_UY268_CR4,0,182,268_AL_.jpg
Father of the Bride Part II \thttps://images-na.ssl-images-amazon.com/images/M/MV5BOTEyNzg5NjYtNDU4OS00MWYxLWJhMTItYWU4NTkyNDBmM2Y0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg
Heat \thttps://images-na.ssl-images-amazon.com/images/M/MV5BNGMwNzUwNjYtZWM5NS00YzMyLWI4NjAtNjM0ZDBiMzE1YWExXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UX182_CR0,0,182,268_AL_.jpg
Sabrina \thttps://images-na.ssl-images-amazon.com/images/M/MV5BMTA3OTQ2NTk2ODNeQTJeQWpwZ15BbWU4MDQ3NTM4MDMx._V1_UX182_CR0,0,182,268_AL_.jpg
Sudden Death \thttps://images-na.ssl-images-amazon.com/images/M/MV5BN2NjYWE5NjMtODlmZC00MjJhLWFkZTktYTJlZTI4YjVkMGNmXkEyXkFqcGdeQXVyNDc2NjEyMw@@._V1_UY268_CR0,0,182,268_AL_.jpg
The American President \thttps://images-na.ssl-images-amazon.com/images/M/MV5BMTI5NDU2NDYzOF5BMl5BanBnXkFtZTYwNDk5MDI5._V1_UY268_CR4,0,182,268_AL_.jpg
Dracula: Dead and Loving It \thttps://images-na.ssl-images-amazon.com/images/M/MV5BZWQ0ZDFmYzMtZGMyMi00NmYxLWE0MGYtYzM2ZGNhMTE1NTczL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjM5ODMxODc@._V1_UX182_CR0,0,182,268_AL_.jpg
Balto \thttps://images-na.ssl-images-amazon.com/images/M/MV5BMjBhNmFlZjMtMzhlYy00NDBlLWFiMjctMmE0ZjgwOGM2MTNmXkEyXkFqcGdeQXVyNjExODE1MDc@._V1_UX182_CR0,0,182,268_AL_.jpg
Nixon \thttps://images-na.ssl-images-amazon.com/images/M/MV5BNzBlOWY0ZmEtZjdkYS00ZGU0LWEwN2YtYzBkNDM5ZDBjMmI1XkEyXkFqcGdeQXVyMTAwMzUyOTc@._V1_UX182_CR0,0,182,268_AL_.jpg
Cutthroat Island \thttps://images-na.ssl-images-amazon.com/images/M/MV5BMDg2YTI0YmQtYzgwMi00Zjk4LWJkZjgtYjg0ZDE2ODUzY2RlL2ltYWdlXkEyXkFqcGdeQXVyNjQzNDI3NzY@._V1_UX182_CR0,0,182,268_AL_.jpg
Casino \thttps://images-na.ssl-images-amazon.com/images/M/MV5BMTcxOWYzNDYtYmM4YS00N2NkLTk0NTAtNjg1ODgwZjAxYzI3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX182_CR0,0,182,268_AL_.jpg
Sense and Sensibility \thttps://images-na.ssl-images-amazon.com/images/M/MV5BNzk1MjU3MDQyMl5BMl5BanBnXkFtZTcwNjc1OTM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg
Four Rooms \thttps://images-na.ssl-images-amazon.com/images/M/MV5BNDc3Y2YwMjUtYzlkMi00MTljLTg1ZGMtYzUwODljZTI1OTZjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg
Ace Ventura: When Nature Calls \thttps://images-na.ssl-images-amazon.com/images/M/MV5BNGFiYTgxZDctNGI4OS00MWU1LWIwOGUtZmMyNGQxYjVkZjQ3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg
Money Train \thttps://images-na.ssl-images-amazon.com/images/M/MV5BNDEwNzcyNjkzNl5BMl5BanBnXkFtZTcwNzQyMzYxMQ@@._V1_UY268_CR4,0,182,268_AL_.jpg
Get Shorty \thttps://images-na.ssl-images-amazon.com/images/M/MV5BMjAwODYzNDY4Ml5BMl5BanBnXkFtZTcwODkwNTgzNA@@._V1_UX182_CR0,0,182,268_AL_.jpg
Copycat \thttps://images-na.ssl-images-amazon.com/images/M/MV5BYWUwNDk2ZDYtNmFkMi00NjE5LWE1M2ItYTRkNTFjZDU3ZDU4L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTYxNjkxOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg
Assassins \thttps://images-na.ssl-images-amazon.com/images/M/MV5BMGY2OWI5ZjQtYjY0Zi00Y2M4LWEwMmMtOTJhODYxYTExNWZlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY268_CR3,0,182,268_AL_.jpg
Powder \thttps://images-na.ssl-images-amazon.com/images/M/MV5BMTM2NDczNjYwMV5BMl5BanBnXkFtZTYwNTI3Mjc4._V1_UX182_CR0,0,182,268_AL_.jpg
Leaving Las Vegas \thttps://images-na.ssl-images-amazon.com/images/M/MV5BNDg3MDM5NTI0MF5BMl5BanBnXkFtZTcwNDY0NDk0NA@@._V1_UX182_CR0,0,182,268_AL_.jpg
Now and Then \thttps://images-na.ssl-images-amazon.com/images/M/MV5BMTM2MDQ1YjUtMGM0NC00NmFlLTljMDktZjJiNWRhMWYxOWYyXkEyXkFqcGdeQXVyNjgzMjI4ODE@._V1_UX182_CR0,0,182,268_AL_.jpg
Persuasion\thttps://images-na.ssl-images-amazon.com/images/M/MV5BMTc5NzAwNDAyN15BMl5BanBnXkFtZTYwMjYzMDc5._V1_UY268_CR1,0,182,268_AL_.jpg
The City of Lost Children \thttps://images-na.ssl-images-amazon.com/images/M/MV5BZGQxZDMwYzYtYmFjNi00NWYyLThjZjAtMDJhODZhYTkyZDNhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY268_CR7,0,182,268_AL_.jpg
Dangerous Minds \thttps://images-na.ssl-images-amazon.com/images/M/MV5BZjk2YjNkYTYtOTZkNy00ZmRkLWI5ODEtYzA4MTM3MzMyZjhlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg
Twelve Monkeys \thttps://images-na.ssl-images-amazon.com/images/M/MV5BN2Y2OWU4MWMtNmIyMy00YzMyLWI0Y2ItMTcyZDc3MTdmZDU4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg
Wings of Courage \thttps://images-na.ssl-images-amazon.com/images/M/MV5BMTc3ODY1MjA3OF5BMl5BanBnXkFtZTcwODgzOTgyMQ@@._V1_UX182_CR0,0,182,268_AL_.jpg
Babe \thttps://images-na.ssl-images-amazon.com/images/M/MV5BYjg4ZjUzMzMtYzlmYi00YTcwLTlkOWUtYWFmY2RhNjliODQzXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_UX182_CR0,0,182,268_AL_.jpg
Carrington \thttps://images-na.ssl-images-amazon.com/images/M/MV5BZjQ3MTBkNDEtMGRlZS00OTY0LTkzYjktOWU2MzI3ZDRiMjY5XkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_UX182_CR0,0,182,268_AL_.jpg
Dead Man Walking \thttps://images-na.ssl-images-amazon.com/images/M/MV5BMTM3NzA1MjM2N15BMl5BanBnXkFtZTcwMzY3MTMzNA@@._V1_UX182_CR0,0,182,268_AL_.jpg
Across the Sea of Time \thttps://images-na.ssl-images-amazon.com/images/M/MV5BOTIwMzk1MDc1MF5BMl5BanBnXkFtZTcwMTEzNDkyMQ@@._V1_UY268_CR43,0,182,268_AL_.jpg
It Takes Two \thttps://images-na.ssl-images-amazon.com/images/M/MV5BMzdhMGU0MzEtZjg1Ny00YzE5LWE0MGQtMTNiN2UwN2I5ZDBjXkEyXkFqcGdeQXVyNTgzMzU5MDI@._V1_UX182_CR0,0,182,268_AL_.jpg
Cry, the Beloved Country \thttps://images-na.ssl-images-amazon.com/images/M/MV5BMTcwMDU1OTEwOF5BMl5BanBnXkFtZTcwMTg5NjEyMQ@@._V1_UY268_CR3,0,182,268_AL_.jpg
Richard III \thttps://images-na.ssl-images-amazon.com/images/M/MV5BMTI3MzMwMzIxMF5BMl5BanBnXkFtZTYwNTM0Nzc5._V1_UY268_CR2,0,182,268_AL_.jpg
Restoration \thttps://images-na.ssl-images-amazon.com/images/M/MV5BMjE5ODY5MTU5OF5BMl5BanBnXkFtZTYwNjcwNTY5._V1_UY268_CR1,0,182,268_AL_.jpg
Mortal Kombat \thttps://images-na.ssl-images-amazon.com/images/M/MV5BNzJhYjYxMTctNmY4My00NGIzLThmN2MtYjgwMjlmZWNjMTJlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg
To Die For \thttps://images-na.ssl-images-amazon.com/images/M/MV5BNGZhYzgwNzItNDljNC00MDM4LThiYjEtNDRhNmE5NDk2MTQ0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg
Se7en \thttps://images-na.ssl-images-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg
Pocahontas \thttps://images-na.ssl-images-amazon.com/images/M/MV5BMzc4YzhiN2ItY2Y4NC00YTA0LWEyMjEtNzllNTcxZDdjODhiXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_UX182_CR0,0,182,268_AL_.jpg
When Night Is Falling \thttps://images-na.ssl-images-amazon.com/images/M/MV5BMTI2OTU5MDMzN15BMl5BanBnXkFtZTcwMTkxNTEzMQ@@._V1_UY268_CR2,0,182,268_AL_.jpg`;

const movies = data.split('\n').map((line) => {
    const [title, posterUrl] = line.split('\t');
    return { title, posterUrl };
});

export default movies;