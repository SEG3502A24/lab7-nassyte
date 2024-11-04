import { Component } from '@angular/core';
import { BooksService } from '../books/service/books.service';
import { Author } from '../books/model/book';  // Assuming the Author model is in book.ts

@Component({
  selector: 'app-author',
  standalone: true,
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {
  authorId: string = '';
  author: Author | null = null;
  notFound: boolean = false;

  constructor(private booksService: BooksService) {}

  // Method to update the authorId based on input
  updateAuthorId(event: Event) {
    const input = event.target as HTMLInputElement;
    this.authorId = input.value;
  }

  // Method to fetch author by ID
  fetchAuthor() {
    this.booksService.getAuthorById(this.authorId).subscribe({
      next: (data) => {
        this.author = data;
        this.notFound = false;
      },
      error: () => {
        this.author = null;
        this.notFound = true;
      }
    });
  }
}
