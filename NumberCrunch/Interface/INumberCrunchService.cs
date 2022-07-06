using NumberCrunch.Model;

namespace NumberCrunch.Interface
{
    public interface INumberCrunchService
    {
        NumberCrunchResponseModel StatusCalculator(NumberCrunchRequestModel crunchNumberModel);
    }
}
