/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpEndpointsService } from './HttpEndpoints.service';

describe('Service: HttpEndpoints', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpEndpointsService]
    });
  });

  it('should ...', inject([HttpEndpointsService], (service: HttpEndpointsService) => {
    expect(service).toBeTruthy();
  }));
});
