import cds from '@sap/cds'
import { Service } from "@sap/cds/apis/services";

export = async (srv: Service) => {

   const myRangerService = await cds.connect.to('service');

   srv.on('READ', '*', async (req) => {
      return myRangerService.run(req.query);
   })

}