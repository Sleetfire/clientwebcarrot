import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';

import {UploadFilesComponent} from './components/upload-files/upload-files.component';

import {CollectionsListComponent} from './components/collections-list/collections-list.component';
import {CollectionsDetailsComponent} from './components/collections-details/collections-details.component';
import {AddCollectionsComponent} from './components/add-collections/add-collections.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'upload', component: UploadFilesComponent },
  { path: 'files', component: UploadFilesComponent },
  { path: 'files/:id', component: UploadFilesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', redirectTo: 'collections', pathMatch: 'full' },
  { path: 'collections', component: CollectionsListComponent },
  { path: 'collections/:id', component: CollectionsDetailsComponent },
  { path: 'add', component: AddCollectionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
