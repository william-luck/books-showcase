# Description

I built this single page application to keep track of the books that I have read this year to help meet my reading goals. I use Goodreads in much the same way, but I only really used the site to keep track of books read, want to read books, and books currently reading. I was never interested in much else aside from reviews and recommendations, so I tried to mimic that basic functionality as much as possible for some simple book cards and reading statistics. 

## Functionality

Upon starting the application, a user is shown a book currently reading, with a progress bar and a collapsible input to update book progress. Favorite books are also displayed, which can be updated / changed through features in each individual book card. 

Below the currently reading book and favorite books are several book cards, each displaying the cover, title, author, genre, rating, and book status. Within each book is a dropdown menu, which includes actions relevant to the status of each book (either finished, currently reading, or want to read). I added a sort by, filter, and search tab to only display books that match set criteria. For example, users can sort the list of books from low to high ratings, and users can filter the books to only display a specific genre. The search tab works with both author and title.

If you’ve finished a book, you have the option to add the books to the featured books container, or you can change the book back to currently reading. “Currently reading” books are not tracked at the top of the page by default. The user has the choice on which book they want to be displayed, which can be done using the dropdown menu on books classified as currently reading. Similarly, books classified as ‘want to read’ are not displayed anywhere else by default, but the user can change the book status to ‘currently reading’, and then a second action to track the book at the top of the page. 

Users have the ability to mark a book as finished from the tracked book container, which will update reading stats. Reading stats include: 
* Books read, which does not include currently reading books or want to read books
* Pages, which includes books finished, plus pages from books currently reading 
* Reading hours, which are calculated from the pages read, using 1.65 minutes per page (this was the number that most closely matched total reading hours on my e-reader)
* Number of books according to genre, including only finished books 
* Number of books according to rating, including only finished books. To maintain clean grouping, I consolidated one, two, and three-star books into one “meh” category (sorry Clockwork Orange)

Within each reading stat category, the user can see a list of books relevant to that particular statistic using popovers. For example, for reading hours, a user can see a disaggregated list of books with the number of reading hours per books, plus the hours read on the book currently reading. 

To add new books, users can enter book information on a controlled new book form. Users are asked to enter a title, author, page count, cover image, genre, rating, and book status. For new books set to currently reading, users are also asked how many pages have been read thus far, to account for reading stats. Once the form has been submitted, the application directs you back to the home page using programmatic navigation, where an alert will show to notify a user that the book has been added to the library. A second alert appears when users mark a book as finished from the tracked book container.

## Imported Components

* The application depends heavily on react bootstrap framework for UI, including cards, card groups, carousel, grid system, forms, popovers, accordions, dropdowns, and others: https://react-bootstrap.github.io/
* React-simple-star-rating, by awran5: https://github.com/awran5/react-simple-star-rating

## Challenges and Learning 

I knew that setState was asynchronous, but this project really taught me the importance of keeping this in mind, especially for actions that I want done only after state updates. The application depends on a lot of functionality to only happen after state updates, like the currently reading container. In some instances the app failed to render because I was using methods on arrays that were in state. This caused some serious headaches, but I’m glad that I’m now very mindful of this. 

The react simple star rating does have some bugs, namely in that the ratings initially liked to stay rendered in the location of the original book card. When filtering / sorting the books on the front end, the ratings would strangely stay in their original location and not be set to their book cards. To get around this, I ended up creating JSX for each individual rating, and used dynamic rendering to display that JSX: 
```
{(stars === 5 ? fiveStar :
    ((stars === 4 ? fourStar : 
        ((stars === 3 ? threeStar : 
            ((stars === 2 ? twoStar :
                ((stars === 1 ? oneStar : zeroStar))
                ))
            ))
        ))
    )}
``` 


As the application grew, it became harder to rely on one-off / temporary solutions, which could have been avoided with better planning from the start. For example, when I had a function return an array of books currently reading, I naively relied on the filter method to return books containing properties with ‘pagesRead,’ since having pages read would indicate that the book was currently being read, and I did not add individual properties for the book status starting off. This caused some brain-breaking bugs when the books were marked as finished, as the pagesRead property still remained (which just matched total pages). It caused duplicate totals in reading stats, and caused to me question my sanity when using the filter method. Similar bugs of these sorts were common across the app as new features were added, not fully realizing which features depended on one another to work. These could have just avoided at the start just by taking the time to put the code into my own words and more carefully thinking through how the components and state interacted with one another.

## Book Covers

1. Fifty Words for Rain: https://m.media-amazon.com/images/I/41YBGxS-tCL.jpg
2. Intamacies: https://images-na.ssl-images-amazon.com/images/I/81L+4dh4nEL.jpg
3. Midnight Library: https://images-na.ssl-images-amazon.com/images/I/81tCtHFtOgL.jpg
4. How Beautiful We Were: https://images-na.ssl-images-amazon.com/images/I/8112-anzl0L.jpg
5. Behold the Dreamers: https://images-na.ssl-images-amazon.com/images/I/91m0R4bUhQL.jpg
6. Klara and the Sun: https://images-na.ssl-images-amazon.com/images/I/711cXHTd3+L.jpg
7. Sparks Like Stars: https://images-na.ssl-images-amazon.com/images/I/81ojVLtMiLL.jpg
8. Where the Crawdads Sing: https://images-na.ssl-images-amazon.com/images/I/81HA6TJ5K-L.jpg
9. Educated: https://images-na.ssl-images-amazon.com/images/I/81NwOj14S6L.jpg
10. Migrations: https://images-na.ssl-images-amazon.com/images/I/81dP8wpiF3L.jpg
11. Sapiens: https://images-na.ssl-images-amazon.com/images/I/71LMXL8DTjL.jpg
12. A Knock at Midnight: https://images-na.ssl-images-amazon.com/images/I/9190R6rW9uL.jpg
13. Atlas of the Heart: https://images-na.ssl-images-amazon.com/images/I/91DNhLLmUOL.jpg
14. The 5AM Club: https://images-na.ssl-images-amazon.com/images/I/71QmjMGNeoL.jpg
15. Brave New World: https://images-na.ssl-images-amazon.com/images/I/81zE42gT3xL.jpg
16. Clockwork Orange: https://images-na.ssl-images-amazon.com/images/I/51FTcHNhQqL.jpg
17. How to Prevent the Next Pandemic: https://images-na.ssl-images-amazon.com/images/I/71ub5eus92L.jpg
18. A Gentleman in Moscow: https://images-na.ssl-images-amazon.com/images/I/A1fs-ErenkL.jpg
19. Rules of Civility: https://images-na.ssl-images-amazon.com/images/I/91R8gs3irXL.jpg
20. The Lincoln Highway: https://images-na.ssl-images-amazon.com/images/I/91DUhtU6KCL.jpg
