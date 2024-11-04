import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksService } from '../books/service/books.service';
import { Author } from '../books/model/book';

@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
  authorId: string = '';
  author: Author | null = null;
  notFound: boolean = false;

  constructor(private booksService: BooksService) {}

  updateAuthorId(event: Event) {
    const input = event.target as HTMLInputElement;
    this.authorId = input.value;
  }

  fetchAuthor(event: Event) {
    event.preventDefault();  // Prevents form submission from reloading the page
    if (this.authorId.trim()) {
      this.booksService.getAuthorById(this.authorId).subscribe({
        next: (data) => {
          console.log('Author data:', data);  // Debug log
          this.author = data;
          this.notFound = false;
        },
        error: (error) => {
          console.error('Error fetching author:', error);  // Debug log
          this.author = null;
          this.notFound = true;
        }
      });
    } else {
      console.warn('Author ID is empty');  // Debug log
      this.notFound = true;
    }
  }
}
