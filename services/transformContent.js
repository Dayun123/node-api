const contentService = require('./contentService');
const moment = require('moment');
const _ = require('lodash');

exports.transformedContent = (req, res, next) => {

  let data = [];
  // let info = [{ ...contentService.getContent }];
  contentService.getContent(req, res);

  // console.log(info);

  // iterate over info
  // for (let i of info) {
  //   let ticketInfo = i.TicketInfo;
  //   let imageThumb = _.find(i.TicketInfo.ImageList, ['Type', 'S']);
  //   let imageFull = _.find(i.TicketInfo.ImageList, ['Type', 'L']);
  //   let availableModality = i.AvailableModality;
  //   let modalities = [];

  //   // iterate over availableModality
  //   for (let a of availableModality) {
  //     let price = _.find(a.PriceList, ['Description', 'SERVICE PRICE']);
  //     let dates = [];

  //     // iterate over operation date list
  //     for (let date of a.OperationDateList) {
  //       let operationDate = moment(date.Date, 'YYYYMMDD');
  //       let from = operationDate.format('MM/DD/YYYY');
  //       let to = operationDate.add(date.MaximumDuration, 'days').format('MM/DD/YYYY');
  //       let days = {
  //         From: from,
  //         To: to
  //       };
  //       dates.push(days);
  //     }

  //     let modality = {
  //       Code: a.Code,
  //       Name: a.Name,
  //       Contract: a.Contract.Name,
  //       PriceList: parseFloat(price.Amount.toFixed(2)),
  //       OperationDateList: dates
  //     }
  //     modalities.push(modality);
  //   }

  //   // (T)ransformed response
  //   responseT = {
  //     Destination: ticketInfo.Destination.Code,
  //     Code: ticketInfo.Code,
  //     Classification: ticketInfo.Classification.Value,
  //     Name: ticketInfo.Name,
  //     Description: ticketInfo.DescriptionList[0].Value,
  //     ImageThumb: imageThumb.Url,
  //     ImageFull: imageFull.Url,
  //     AvailableModality: modalities
  //   }
  //   data.push(responseT)
  // }
  return data;
}
