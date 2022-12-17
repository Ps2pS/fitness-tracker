export default function CreatePlan() {
  return (
    <div class="container">
      <div className="text-center">
        <h1 className="display-1">Create Schedule</h1>
      </div>
      <div>
        <form>
          <div class="form-outline mb-4">
            <textarea
              class="form-control"
              id="form6Example7"
              rows="8"
            ></textarea>
            <label class="form-label" for="form6Example7">
              Additional information
            </label>
          </div>

          <button type="submit" class="btn btn-primary btn-block mb-4">
            Create Schedule
          </button>
        </form>
      </div>
    </div>
  );
}
