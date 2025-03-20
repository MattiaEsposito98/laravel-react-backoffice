<div id="buttons">
    <!-- Pulsante Modifica -->
    <a href="{{ route('videogames.edit', $videogame) }}">
        <button type="button" class="btn btn-warning">Modifica</button>
    </a>

    <!-- Pulsante Elimina (attiva il modal) -->
    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal{{ $videogame->id }}">
        Elimina
    </button>

    <!-- Modal di eliminazione -->
    <div class="modal fade" id="deleteModal{{ $videogame->id }}" tabindex="-1"
        aria-labelledby="deleteModalLabel{{ $videogame->id }}" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="deleteModalLabel{{ $videogame->id }}">Vuoi eliminare il
                        videogioco?</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Cliccando su conferma eliminerai il progetto.
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annulla</button>
                    <form action="{{ route('videogames.destroy', $videogame) }}" method="POST">
                        @csrf
                        @method('DELETE')
                        <button type="submit" class="btn btn-outline-danger">Elimina</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
