using { service as bupa } from './external/service';

@protocol: [{
   kind: 'odata-v4',
   path: '/ranger-service',
}]
service myRangerService {
    entity Pollutions as projection on bupa.Pollutions excluding {
      texts,
      localized
   };
}