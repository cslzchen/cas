/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { FormComponent } from './form.component';
import {AlertComponent} from "../alert/alert.component";
import {SaveformtopComponent} from "./saveformtop/saveformtop.component";
import {Messages} from "../messages";
import {Form, Data} from "../../domain/form";
import {FormService} from "./form.service";
import {TabService} from "./tab.service";
import {ActivatedRouteStub} from "../../testing/router-stub";

let formServicesStub = {
  getService(id: number): Promise<Form> {
    return Promise.resolve(new Form());
  },

  saveService(serviceData: Data): Promise<Data> {
    return Promise.resolve(new Data());
  }
};

let userServiceStub = {
  getRoles(): Promise<String[]> {
    return Promise.resolve([]);
  },
  getPermissions(): Promise<String[]> {
    return Promise.resolve([]);
  }
};

let activatedRoute: ActivatedRouteStub = new ActivatedRouteStub();

let stubLocation = {
  path() {
    return "";
  }
}

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ FormComponent, AlertComponent, SaveformtopComponent ],
      providers: [
        Messages,
        TabService,
        {provide: FormService, useValue: formServicesStub},
        {provide: ActivatedRoute, useValue: activatedRoute},
        {provide: Location, useValue: stubLocation}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    activatedRoute.testData = new Data();
    activatedRoute.testParams = {id: -1};
    activatedRoute.testUrl = { path() { return "";}};
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    component.path = "";
    component.ngOnInit = function() { };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
