namespace NumberCrunch.Model
{
    public class NumberCrunchResponseModel
    {
        public List<string>? statusResponse { get; set; }
        public bool success { get; set; }
        public string? errorMessage { get; set; }
        public string? message { get; set; }
    }
}
