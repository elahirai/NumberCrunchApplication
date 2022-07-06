using NumberCrunch.Constant;
using NumberCrunch.Interface;
using NumberCrunch.Model;

namespace NumberCrunch.Service
{
  public class NumberCrunchService : INumberCrunchService
  {
    public NumberCrunchResponseModel StatusCalculator(NumberCrunchRequestModel numberCrunchRequestModel)
    {
      var response = new NumberCrunchResponseModel();
      response.success = false;
      response.statusResponse = null;
      if (numberCrunchRequestModel.maxNum == null || numberCrunchRequestModel.maxNum <= 0) { response.errorMessage = Constants.MaxNum; return response; };
      if (numberCrunchRequestModel.doctNum == null || numberCrunchRequestModel.doctNum <= 0) { response.errorMessage = Constants.DocNum; return response; };
      if (numberCrunchRequestModel.patientNum == null || numberCrunchRequestModel.patientNum <= 0) { response.errorMessage = Constants.PatientNum; return response; };
      if (numberCrunchRequestModel.patientNum > numberCrunchRequestModel.maxNum) { response.errorMessage = Constants.PatientMaxNum; return response; };
      if (numberCrunchRequestModel.doctNum > numberCrunchRequestModel.maxNum) { response.errorMessage = Constants.DocMaxNum; return response; };

      string status = "";
      response.statusResponse = new List<string>();
      for (int i = 1; i <= numberCrunchRequestModel.maxNum; i++)
      {
        if (i % numberCrunchRequestModel.patientNum == 0)
        {
          if (i % numberCrunchRequestModel.doctNum == 0)
          {
            status = Constants.Both;
          }
          else
          {
            status = Constants.Patient;
          }
        }
        else if (i % numberCrunchRequestModel.doctNum == 0)
        {
          if (i % numberCrunchRequestModel.patientNum == 0)
          {
            status = Constants.Both;
          }
          else
          {
            status = Constants.Doctor;
          }
        }
        else
        {
          status = Constants.None;
        }

        response.statusResponse.Add(status);
      }

      response.success = true;
      response.message = numberCrunchRequestModel.message;
      return response;
    }

  }
}
