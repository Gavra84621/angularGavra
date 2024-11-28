import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ContentComponent } from '../content/content.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterModule, HeaderComponent, SidebarComponent, ContentComponent, FooterComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
