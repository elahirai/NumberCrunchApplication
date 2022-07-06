using Microsoft.AspNetCore.Mvc;
using NumberCrunch.Interface;
using NumberCrunch.Model;

namespace NumberCrunch.Controllers
{
    public class CrunchNumberController : ControllerBase
    {
        private readonly INumberCrunchService _numberCrunchService;

        public CrunchNumberController(INumberCrunchService numberCrunchService)
        {
            _numberCrunchService = numberCrunchService;
        }

        [HttpPost]
        [Route("StatusCalculator")]
        public ActionResult StatusCalculator(NumberCrunchRequestModel crunchNumberModel)
        {
            var response = this._numberCrunchService.StatusCalculator(crunchNumberModel);
            if (!response.success)
            {
                return BadRequest(response.errorMessage);
            }

            return Ok(response);
        }
    }
}
