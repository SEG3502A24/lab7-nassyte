import { Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { BooksComponent } from "./books/books.component";
import { BookComponent } from "./books/book/book.component";
import { LoginComponent } from "./login/login.component";
import { AdminComponent } from "./admin/admin.component";
import { loggedInGuard } from "./logged-in.guard";
import { AuthorComponent } from "./authors/author.component";  // Import the new Author component

const booksRoutes: Routes = [
  { path: ':id', component: BookComponent }
];

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'authors', component: AuthorComponent },  // Added missing comma here
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [loggedInGuard]
  },
  {
    path: 'books',
    component: BooksComponent,
    children: booksRoutes
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];
