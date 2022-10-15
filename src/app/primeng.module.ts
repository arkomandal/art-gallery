import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { RippleModule } from 'primeng/ripple';
import { TimelineModule } from 'primeng/timeline';
import { TooltipModule } from 'primeng/tooltip';
import { AccordionModule } from 'primeng/accordion';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { PickListModule } from 'primeng/picklist';
import { ChipsModule } from 'primeng/chips';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SidebarModule } from 'primeng/sidebar';
import { CardModule } from 'primeng/card';
import { FileUploadModule } from 'primeng/fileupload';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CalendarModule } from 'primeng/calendar';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { BlockUIModule } from 'primeng/blockui';
import { TreeTableModule } from 'primeng/treetable';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MessageService, ConfirmationService } from 'primeng/api';

let modules = [
  CommonModule,
    TableModule,
    RatingModule,
    ToolbarModule,
    ButtonModule,
    MenubarModule,
    CarouselModule,
    GalleriaModule,
    BadgeModule,
    InputTextModule,
    InputTextareaModule,
    MessageModule,
    MessagesModule,
    RippleModule,
    TimelineModule,
    TooltipModule,
    AccordionModule,
    DialogModule,
    DynamicDialogModule,
    PickListModule,
    ChipsModule,
    RadioButtonModule,
    SidebarModule,
    CardModule,
    FileUploadModule,
    TabViewModule,
    ToastModule,
    ConfirmDialogModule,
    DropdownModule,
    SelectButtonModule,
    CalendarModule,
    AutoCompleteModule,
    BlockUIModule,
    TreeTableModule,
    ProgressSpinnerModule
];
@NgModule({
  declarations: [],
  imports: modules,
  exports: modules,
  providers: [
    MessageService, ConfirmationService 
  ]
})
export class PrimengModule { }
