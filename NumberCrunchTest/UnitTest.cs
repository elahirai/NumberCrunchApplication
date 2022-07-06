using NumberCrunch.Constant;
using NumberCrunch.Model;
using NumberCrunch.Service;

namespace NumberCrunchTest
{
    [TestClass]
    public class UnitTest
    {
        [TestMethod]
        public void TestMethod()
        {
            var product = new NumberCrunchService();

            // Act
            var result = product.StatusCalculator(new NumberCrunchRequestModel() { doctNum = 1, patientNum = 1, maxNum = null });
            Assert.IsNotNull(result);
            Assert.AreEqual(Constants.MaxNum, result.errorMessage);

            result = product.StatusCalculator(new NumberCrunchRequestModel() { doctNum = null, patientNum = 1, maxNum = 1 });
            Assert.IsNotNull(result);
            Assert.IsFalse(result.success);
            Assert.IsNull(result.statusResponse);
            Assert.AreEqual(Constants.DocNum, result.errorMessage);

            result = product.StatusCalculator(new NumberCrunchRequestModel() { doctNum = 1, patientNum = null, maxNum = 1 });
            Assert.IsNotNull(result);
            Assert.IsFalse(result.success);
            Assert.IsNull(result.statusResponse);
            Assert.AreEqual(Constants.PatientNum, result.errorMessage);

            result = product.StatusCalculator(new NumberCrunchRequestModel() { doctNum = 1, patientNum = 4, maxNum = 3 });
            Assert.IsNotNull(result);
            Assert.IsFalse(result.success);
            Assert.IsNull(result.statusResponse);
            Assert.AreEqual(Constants.PatientMaxNum, result.errorMessage);

            result = product.StatusCalculator(new NumberCrunchRequestModel() { doctNum = 4, patientNum = 2, maxNum = 3 });
            Assert.IsNotNull(result);
            Assert.IsFalse(result.success);
            Assert.IsNull(result.statusResponse);
            Assert.AreEqual(Constants.DocMaxNum, result.errorMessage);

            result = product.StatusCalculator(new NumberCrunchRequestModel() { doctNum = 4, patientNum = 2, maxNum = 5 });
            Assert.IsNotNull(result);
            Assert.IsTrue(result.success);
            Assert.IsNotNull(result.statusResponse);
        }
    }
}
