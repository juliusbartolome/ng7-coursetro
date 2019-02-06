import { TestBed, inject } from '@angular/core/testing';
import { HttpEventType } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DataService } from './data.service';
import paginatedUser from '../testdata/users.json';

describe('DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [DataService]
  }));

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });

  it('should have a getUsers', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service.getUsers).toBeDefined();
  });

  it('should return users with getUsers',
    inject(
      [HttpTestingController, DataService],
      (httpMock: HttpTestingController, dataService: DataService) => {
        const mockPaginatedUser = paginatedUser;
        dataService.getUsers().subscribe(event => {
          switch (event.type) {
            case HttpEventType.Response:
              expect(event.body).toEqual(mockPaginatedUser);
          }
        });

        const mockReq = httpMock.expectOne(dataService.url);

        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.responseType).toEqual('json');
        mockReq.flush(mockPaginatedUser);

        httpMock.verify();
    }));
});
